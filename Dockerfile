###########
# BUILDER #
###########
FROM python:slim as builder
WORKDIR /usr/src/app
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
RUN pip install --upgrade pip
RUN pip install flake8==3.9.2
COPY ./backend .
RUN flake8 --ignore=E501,F401 .
COPY ./backend/requirements.txt .
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /usr/src/app/wheels -r requirements.txt

#########
# FINAL #
#########

FROM python:slim

# create directory for the app user
RUN mkdir -p /home/app

# create the app user
RUN addgroup --system app && adduser app --system && adduser app app

# create the appropriate directories
ENV HOME=/home/app
ENV APP_HOME=/home/app/web
RUN mkdir $APP_HOME
RUN mkdir $APP_HOME/django_static
WORKDIR $APP_HOME

COPY --from=builder /usr/src/app/wheels /wheels
COPY --from=builder /usr/src/app/requirements.txt .
RUN pip install --no-cache /wheels/*

ENV ENV_FILENAME=.env.prod
COPY ./entrypoint.prod.sh .
RUN sed -i 's/\r$//g'  $APP_HOME/entrypoint.prod.sh
RUN chmod +x  $APP_HOME/entrypoint.prod.sh

COPY ./backend $APP_HOME

RUN chown -R app:app $APP_HOME

USER app
RUN ["/home/app/web/entrypoint.prod.sh"]
