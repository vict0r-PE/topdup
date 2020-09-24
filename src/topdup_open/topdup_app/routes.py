from flask import render_template, url_for, flash, redirect
from . import app, db
from .models import Post
from cachetools import cached, LRUCache, TTLCache
import re
import json
# from .post_orm import Post

@app.route("/")
@app.route("/home")
@cached(cache= TTLCache(maxsize= 1000, ttl = 300))
def home():
    posts = Post.query.filter(Post.similar_post_info != json.dumps(
        [])).order_by(Post.id.desc()).all()
    for post in posts:
        post.get_similar_post_info()
    all_posts = Post.query.all()
    for p in all_posts:
        if p.url:
            p.domain = re.search('https?:\/\/([\w.]+)\/', p.url).group(1)
    return render_template('index.html', posts=posts, all_posts=all_posts)


@app.route("/about")
def about():
    return render_template('about.html', title='About')


@app.route("/post/<int:post_id>")
@cached(cache= TTLCache(maxsize= 1000, ttl = 300))
def post(post_id):
    post = Post.query.get_or_404(post_id)
    post.get_similar_post_info()
    return render_template('post_detail.html', post=post)
