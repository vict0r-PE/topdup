
# 1. Virtual Env
## 1.1 Set up environment
```
    virtualenv -p python3 venv
    source venv/bin/activate
    pip install -r requirements.txt
```

Copy file **.env-example** &#8594; **.env** . Then set Username, Password for Data crawler Receiver in file .env
```
    USERNAME_MONITOR='your_username'
    PASSWORD_MONITOR='your_pass'
```

## Dataset
Download database, tf-idf-model, post_embedded_vector... in: [Topdup dataset](https://drive.google.com/drive/folders/1UcSU9CcTtv3o1mPuLpmFYrhEK2fJcTuC?usp=sharing) and put it in folder ./dataset

## Auto load data and save to database
```
    python run_autoload.py
```

## Run WebApp
```
    python run_app.py
```
## Set autoload_data as linux crontab for automation receive data from crawler through Rabbitmq

Open crontab schedule: 
```
    crontab -e
```
Add a schedule to run load_data code one time per minutes
```
    * * * * * absolute_path_python absolute_path_run_autoload.py
```
absolute_path_python: Set absolute path to python environment  
absolute_path_run_autoload: Set absolute path to file run_autoload.py

Example:
```
    * * * * * /home/doan.bao.linh/env/bin/python /home/doan.bao.linh/topdup_open/run_autoload.py
```

# 2. Docker
(Pending)
## Setup
Set Username, Password for Data crawler Receiver in .env
```
    USERNAME_MONITOR='user'
    PASSWORD_MONITOR='pass'
```
## Build & Run
```
    docker-compose build
    docker-compose up
```
## Cronjob
(In Progress)
