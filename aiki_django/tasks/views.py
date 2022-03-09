from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from rest_framework.decorators import permission_classes, api_view, authentication_classes
from rest_framework.permissions import SAFE_METHODS, BasePermission, IsAdminUser, IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication

from rest_framework.response import Response

from users.models import AikiUser

from .models import *
from .serializers import *

# API Views
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def taskList(request):

    tasks = Task.objects.filter(author=request.user)
    serializer = TaskSerializer(tasks, many=True)
    
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def taskCreate(request):
    serializer = TaskSerializer(data=request.data, many=True)
    
    is_validated = True
    for task in request.data:

        if task['author'] != request.user.id:
            is_validated = False

    if is_validated:
        if serializer.is_valid():
            serializer.save()
        else:
            return Response("An error occurred with the serializer,\
                 please check that all the fields in your request are correct")
    else:
        return Response("You cannot create a task with the ID of another user")

    return Response(serializer.data)

@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def taskUpdate(request, pk):

    task = Task.objects.get(id=pk)

    serializer = TaskSerializer(instance=task, data=request.data, many=False, partial=True)
    
    if task.author.id != request.user.id:
        return Response("You cannot update a task that belongs to another user")

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def taskDelete(request, pk):

    task = Task.objects.get(id=pk)
    if task.author.id == request.user.id:
        task.delete()
    else:
        return Response(f'You can only delete a resource you own')
        
    
    return Response(f'Item ID: {pk} succesfully deleted!')

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getStatus(request):

    status = Status.objects.all()

    serializer = StatusSerializer(status, many=True)
    
    return Response(serializer.data)