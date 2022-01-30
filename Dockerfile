FROM python:3.10.2
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED 1

WORKDIR /project
ADD requirements.txt /project
COPY aiki/ /project/

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]