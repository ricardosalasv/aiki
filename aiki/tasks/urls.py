from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register, name='tasks-register'),
    path('login/', views.login, name='tasks-login'),
    path('', views.home, name='tasks-home'),
    path('home/', views.home, name='tasks-home'),
    path('task/', views.task, name='tasks-task'),
]