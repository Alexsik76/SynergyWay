#!/bin/sh

if [ "$DATABASE" = "postgres" ]; then
  echo "Waiting for postgres..."
  until python manage.py migrate
    do
        echo "Waiting for db to be ready..."
        sleep 2
    done
  echo "PostgreSQL started"
 fi
exec "$@"
