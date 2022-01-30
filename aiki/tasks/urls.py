from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.task, name='tasks-register'),
    path('login/', views.task, name='tasks-login'),
    path('', views.task, name='tasks-home'),
    path('home/', views.task, name='tasks-home'),
    path('task/', views.task, name='tasks-task'),
]