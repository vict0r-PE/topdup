
# 1. Virtual Env
## 1.1 Set up environment

Open terminal and move to topdup_open directory 
```
    virtualenv -p python3 env
    source env/bin/activate
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
## Set autoload_data as linux crontab for automation receive data from crawler through Rabbitmq (In staging/production phase).

Open run_autoload.sh and set value of topdup_open_obsolute_path

Example:
```
    cd /home/nguyen.thanh.trungb/Desktop/topdup/src/topdup_open
```

Open crontab schedule: 
```
    crontab -e
```
Add a schedule to run load_data code one time per minutes
```
    * * * * * sh obsolute_path_of_run_autoload_sh
```
obsolute_path_of_run_autoload_sh: obsolute path of file **run_autoload.sh**.


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
