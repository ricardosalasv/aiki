from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import *
from .serializers import *

# API Views
@api_view(['GET'])
def taskList(request):

    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks, many=True)
    
    return Response(serializer.data)

@api_view(['POST'])
def taskCreate(request):
    serializer = TaskSerializer(data=request.data, many=True)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['POST', 'PATCH'])
def taskUpdate(request, pk):

    task = Task.objects.get(id=pk)

    serializer = TaskSerializer(instance=task, data=request.data, many=False, partial=True)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['DELETE'])
def taskDelete(request, pk):

    task = Task.objects.get(id=pk)
    task.delete()
    
    return Response(f'Item ID: {pk} succesfully deleted!')