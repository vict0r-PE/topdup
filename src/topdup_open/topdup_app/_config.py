import os
from dotenv import load_dotenv

#load .env
load_dotenv('.env')
# file, model path
PROJECT_DIR = os.getcwd()
# PROJECT_DIR = '/app'
DATABASE_URI = f'sqlite:///{PROJECT_DIR}/dataset/post_database.db'
