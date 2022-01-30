from email.policy import default
from django.db import models
from django.forms import DateTimeField

class Task(models.Model):

    def __init__(self):
        super().__init__()

        self.creation_datetime =  DateTimeField()
