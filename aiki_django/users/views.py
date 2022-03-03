from django.shortcuts import render

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import *
from .serializers import *

@api_view(['POST'])
def register(request):

    if request.method == "POST":

        register_serializer = RegisterUserSerializer(data=request.data)

        if register_serializer.is_valid():
            
            new_user = register_serializer.save()

            if new_user:
                return Response(status=status.HTTP_201_CREATED)

            return Response(register_serializer.errors, status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):


    return Response("To implement")