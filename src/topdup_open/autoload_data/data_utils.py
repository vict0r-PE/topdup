##################################################################################################
#Rabbitmq: Docbao Rabbitmq Client - Dang Hai Loc                                                 #
#Function: Get crawled posts through RabbitMQ                                                    #
##################################################################################################


import os
import pika
import sys
import time
import pickle
import numpy as np
from time import sleep
from random import randint, choice, choices
from datetime import datetime, timedelta
from scipy.sparse import csr_matrix, vstack
from sklearn.metrics.pairwise import cosine_similarity
# from pysparnn import cluster_index

from ._config import *
from .raw_post import RawPost
from .post_orm import Post
from .post_orm import fake_data, create_session, load_pickle_data
from .utils.text_utils import doc2vec, compute_doc_similarity, check_valid_content
from .log import get_logger
from .utils import save_body_to_pickle, load_body_from_pickle


logger = get_logger(__name__)


def handle_post(new_posts):
    """ Handle post: 
        Compute post_embedding, 
        Search nearest post candidate for each post base on post_embedding
        Re-compute similarity_score for each candidate by Jaccard metric in compute_doc_similarity()
        Save post to database and pickle file
    """
    if len(new_posts) == 0:
        return
    session = create_session()
    for post in new_posts:
        is_valid = check_valid_content(post.content)
        if is_valid:
            session.add(post)
            post.embedd_vector = doc2vec(post.content)
        else:
            logger.debug(
                f'post content is too short: length {len(post.content)}, {post.title},  {post.url}, ')
            post.embedd_vector = None

    new_posts = [post for post in new_posts if post.embedd_vector is not None]
    old_posts = load_pickle_data(EMBEDDING_FILE)
    session.commit()

    # compute and search nearest post
    if len(old_posts) > 0 and len(new_posts) > 0:
        old_ids = [post['id'] for post in old_posts]
        old_vectors = vstack([post['vector'] for post in old_posts])
        new_vectors = vstack([post.embedd_vector for post in new_posts])

        # sim_matrix[i,j] - similarity score of (new_posts[i], old_posts[j])
        sim_matrix = cosine_similarity(new_vectors, old_vectors)
        del new_vectors
        del old_vectors

        for i, post in enumerate(new_posts):
            score_list = enumerate(list(sim_matrix[i]))
            topK_score = sorted(
                score_list, key=lambda x: x[1], reverse=True)[:TOP_K]
            similarity_info = []

            # get similarity score with compute_doc_similarity function
            for index, _ in topK_score:
                sim_id = old_ids[index]
                sim_post = session.query(Post).get(sim_id)
                if (sim_post is not None) and (post.url != sim_post.url):
                    score = compute_doc_similarity(post.content, sim_post.content)

                    # append similarity info to database
                    if score > SAVE_THRESH:
                        post.add_similar_info({
                            "id": sim_id,
                            "score": score,
                            "url": sim_post.url
                        })
                        sim_post.add_similar_info({
                            'id': post.id,
                            'score': score,
                            'url': post.url
                        })
        del sim_matrix

    # re-save all post embedding to pickle file
    for post in new_posts:
        old_posts.append({
            'id': post.id,
            'vector': post.embedd_vector
        })

    f = open(EMBEDDING_FILE, 'wb+')
    pickle.dump(old_posts, f)
    f.close()
    session.commit()
    session.close()


"""
HOW TO USE
This program will check repeatedly if there are new post in RabbitMQ queue. If there are new posts,
it will parse binary message into Post() object, and for each Post instance, call Post.push_to_database()
to save it in database.
"""
def read_data_from_source(data_source='rabbitmq'):
    """
    Start a process that get data from RabbitMQ then push to database
    """
    if data_source == "pickle_file":
        all_body = load_body_from_pickle()
        logger.debug(f"Number of data_body in pickle file: {len(all_body)}")
        posts = [RawPost(body).to_orm_post() for body in all_body]
        return posts

    if data_source == "fake":
        # fake data from fake_dataset.csv
        posts = [fake_data() for i in range(20)]
        return posts

    # connect to RabbitMQ
    # login
    credentials = pika.PlainCredentials(USERNAME, PASSWORD)
    parameters = pika.ConnectionParameters(HOST, PORT, '/', credentials)
    connection = pika.BlockingConnection(parameters)

    channel = connection.channel()
    queue_state = channel.queue_declare(POST_QUEUE, durable=True, passive=True)
    channel.queue_bind(exchange=EXCHANGE, queue=POST_QUEUE)
    queue_length = queue_state.method.message_count

    # get message
    load_time = 0
    count_post = 0
    raw_posts = []
    posts = []

    while (queue_length >= 1 and count_post < MAX_POST):
        queue_length -= 1
        count_post += 1
        method, properties, body = channel.basic_get(POST_QUEUE, auto_ack=True)
        if body is not None:
            # parse message into Post
            post = RawPost(body)
            posts.append(post)

    save_body_to_pickle([p._body for p in posts])
    posts = [p.to_orm_post() for p in posts]
    connection.close()
    return posts
