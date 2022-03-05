from django.urls import path
from rest_framework import routers
from . import views

urlpatterns = [
    path('register/', views.register, name='users-register'),
    path('logout/blacklist/', views.blacklist_token, name='blacklist'),
]