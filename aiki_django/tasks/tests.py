from django.test import TestCase
from django.contrib.auth.models import User
from django.utils import timezone
from .models import *

class TestCreateTask(TestCase):

    @classmethod
    def set_up_test_data(cls):
        test_task = Task.objects.create(
            author=User.objects.get(id=1),
            title="Test Task",
            status=Status.objects.get(id=1),
            description="Test Task Created",
            start_date=timezone.now(),
            deadline=timezone.now()
        )

    def test_task_content(self):
        task = Task.objects.get(title="Test Task")
        author = f'{task.author}'
        title = f'{task.title}'
        status = f'{task.status}'
        description = f'{task.description}'
        start_date = f'{task.start_date}'
        deadline = f'{task.deadline}'
        creation_datetime = f'{task.creation_datetime}'

        self.assertEqual(title, 'Test Task')
        self.assertEqual(description, 'Test Task Created')
    

