
# Virtual Env
## Set up environment
```
    virtualenv -p python3 env
    source env/bin/activate
    pip install -r requirements.txt
```

Set Username, Password for Data crawler Receiver in .env
```
    USERNAME_MONITOR='your_username'
    PASSWORD_MONITOR='your_pass'
```



## Dataset
Download dataset in: [post_database.db](https://drive.google.com/file/d/1YtXEDgFQPpZRT3eeCdVKiGWkNRi8lW48) and put it in folder /dataset
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

# Docker
(Pending)
## Setup

```
    setup username, password in .env-example
    change file name .env-example to .env
```
## Build & Run
```
    docker-compose build
    docker-compose up
```
