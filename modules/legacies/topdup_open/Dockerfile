FROM python:3.6
WORKDIR /app
RUN apt-get update && apt-get -y install cron
COPY requirements.txt ./
RUN pip install -r /app/requirements.txt
COPY cron /etc/cron.d/cron
# Give execution rights on the cron job
RUN chmod 0644 /etc/cron.d/cron
# Apply cron job
RUN crontab /etc/cron.d/cron
# Run the command on container startup
RUN service cron start
CMD ["cron", "-f"]
