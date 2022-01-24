#!/bin/sh

if [ "$DATABASE" = "postgres" ]; then
  echo "Waiting for postgres..."

  while ! nc -z $SQL_HOST $SQL_PORT; do
    sleep 0.1
  done

  echo "PostgreSQL started"
 fi
#until python manage.py migrate; do
#  echo "Waiting for db to be ready..."
#  sleep 0.2
#done
python manage.py migrate
#python manage.py collectstatic
