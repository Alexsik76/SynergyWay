#!/bin/sh

  until python manage.py migrate
    do
        echo "Waiting for db to be ready..."
        sleep 1
    done
  echo "PostgreSQL started"
  python ./manage.py collectstatic --no-input
  gunicorn djangoreactproject.wsgi --bind 0.0.0.0:8000 --workers 4 --threads 4
exec "$@"
