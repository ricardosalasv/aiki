from django.shortcuts import render
from django.contrib.auth.decorators import login_required

@login_required
def home(request):

    context = {
        'title' : 'Home'
    }
    
    return render(request, "tasks/home.html", context=context)

@login_required
def task(request):

    context = {
        'title' : 'Task'
    }

    return render(request, "tasks/task.html", context=context)