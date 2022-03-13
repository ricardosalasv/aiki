from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model

class Status(models.Model):

    name = models.CharField(max_length=60, editable=True)

    def __str__(self):
        return self.name

class Task(models.Model):

    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    status = models.ForeignKey(Status, on_delete=models.SET_NULL, null=True, default=list(filter(lambda x : x.name == "To Do", Status.objects.all()))[0].pk)

    title = models.CharField(max_length=60, editable=True)
    description = models.TextField(max_length=500, editable=True, blank=True)
    deadline = models.DateField(editable=True)
    creation_datetime =  models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.pk}, {self.title}, {self.status.name}"
