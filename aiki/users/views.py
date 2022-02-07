from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from .forms import UserRegisterForm
from django.contrib import messages

def register(request):

    if request.method == "POST":
        form = UserRegisterForm(request.POST)

        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Your account has been created! You are now able to log in!')

            return redirect('login')
    else:
        form = UserRegisterForm()

    context = {
        'title' : 'Register',
        'form' : form,
    }

    return render(request, "users/register.html", context=context)

def login(request):

    context = {
        'title' : 'Login'
    }

    return render(request, "users/login.html", context=context)