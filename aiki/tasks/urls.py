from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='tasks-home'),
    path('home/', views.home, name='tasks-home'),
    path('task/', views.task, name='tasks-task'),
]