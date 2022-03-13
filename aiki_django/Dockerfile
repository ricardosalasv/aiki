FROM python:3.10.2
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED 1

WORKDIR /aiki_django
ADD ./requirements.txt /aiki_django
COPY . /aiki_django/

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]