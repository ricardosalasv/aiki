from django.urls import path
from rest_framework import routers
from . import views

urlpatterns = [
    path('task-list/', views.taskList, name='tasks-list'),
    path('task-create/', views.taskCreate, name='tasks-create'),
    path('task-update/<str:pk>', views.taskUpdate, name='tasks-update'),
    path('task-delete/<str:pk>', views.taskDelete, name='tasks-delete'),
    path('get-status-definitions/', views.getStatus, name='get-status-definitions'),
]