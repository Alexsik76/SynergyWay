FROM python:3
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
COPY ./backend backend
WORKDIR /backend
RUN pip install --no-cache-dir pipenv \
    && pipenv install --deploy --ignore-pipfile --system
