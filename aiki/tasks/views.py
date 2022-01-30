from django.shortcuts import render
from django.http import HttpResponse

def register(request):

    return HttpResponse("<h1>Register</h1>")

def login(request):

    return HttpResponse("<h1>login</h1>")

def home(request):
    
    return HttpResponse("<h1>Home</h1>")

def task(request):

    return HttpResponse("<h1>Task</h1>")
