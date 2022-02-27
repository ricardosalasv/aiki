from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Status(models.Model):

    name = models.CharField(max_length=60, editable=True)

class Task(models.Model):

    author = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.ForeignKey(Status, on_delete=models.SET_NULL, null=True, default=list(filter(lambda x : x.name == "To Do", Status.objects.all()))[0].pk)

    title = models.CharField(max_length=60, editable=True)
    description = models.TextField(max_length=500, editable=True)
    start_date = models.DateField(editable=True)
    deadline = models.DateField(editable=True)
    creation_datetime =  models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title
