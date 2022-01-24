#!/bin/sh

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
    until python manage.py migrate
do
    echo "Waiting for db to be ready..."
    sleep 1
done

python manage.py collectstatic --noinput

fi


