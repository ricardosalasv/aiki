# Generated by Django 4.0.1 on 2022-03-13 00:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0003_task_status'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='start_date',
        ),
    ]
