from django.utils import timezone
from django.contrib.auth.models import User

class Task(models.Model):

    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=60, editable=True)
    description = models.TextField(max_length=500, editable=True)
    start_date = models.DateField(editable=True)
    deadline = models.DateField(editable=True)
    creation_datetime =  models.DateTimeField(default=timezone.now)

    def __str__(self) -> str:
        return self.title