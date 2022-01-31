from django.shortcuts import render
from django.http import HttpResponse

def register(request):

    context = {
        'title' : 'Register'
    }

    return render(request, "tasks/register.html", context=context)

def login(request):

    context = {
        'title' : 'Login'
    }

    return render(request, "tasks/login.html", context=context)

def home(request):

    context = {
        'title' : 'Home'
    }
    
    return render(request, "tasks/home.html", context=context)


def task(request):

    context = {
        'title' : 'Task'
    }

    return render(request, "tasks/task.html", context=context)