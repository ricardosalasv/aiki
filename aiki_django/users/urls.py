from django.urls import path
from rest_framework import routers
from . import views

urlpatterns = [
    path('register/', views.register, name='users-register'),
    path('login/', views.login, name='users-login'),
]