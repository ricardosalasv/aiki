from django.shortcuts import render

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import SAFE_METHODS, BasePermission, IsAdminUser, IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework_simplejwt.tokens import RefreshToken

from .models import *
from .serializers import *

@api_view(['POST'])
def register(request):

    register_serializer = RegisterUserSerializer(data=request.data)

    if register_serializer.is_valid():
        
        new_user = register_serializer.save()

        if new_user:
            return Response(status=status.HTTP_201_CREATED)

        return Response(register_serializer.errors, status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def blacklist_token(request):
    
    try:
        refresh_token = request.data["refresh_token"]
        token = RefreshToken(refresh_token)
        token.blacklist()

    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)