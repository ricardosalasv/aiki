from django.shortcuts import render

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