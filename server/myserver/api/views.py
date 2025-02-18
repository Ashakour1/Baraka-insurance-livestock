from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import CustomUser , Groups
from django.shortcuts import get_object_or_404
from .serializers import RegisterSerializer , CustomTokenObtainPairSerializer , GroupsSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
# Create your views here.


class RegisterUser(APIView):
    
    def post(self,request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "success": True,
                "message": "User created successfully",
                "data": serializer.data
            }, status=status.HTTP_201_CREATED)
        return Response({
            "success": False,
            "message": "User not created",
            "error": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
        
    

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


class GroupsView(APIView):
    def get(self, request, pk=None):
        if pk:
            group = get_object_or_404(Groups, pk=pk)
            return Response(GroupSerializer(group).data)
        groups = Groups.objects.all()
        return Response(GroupsSerializer(groups, many=True).data)

    def post(self, request):
        serializer = GroupsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "success": True,
                "message": "Group created successfully",
                "data": serializer.data
            }, status=status.HTTP_201_CREATED)
          
        return Response({
            "success": False,
            "message": "Group not created",
            "error": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
       

    def put(self, request, pk):
        group = get_object_or_404(Groups, pk=pk)
        serializer = GroupsSerializer(instance=group, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "success": True,
                "message": "Group updated successfully",
                "data": serializer.data
            },status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        group = get_object_or_404(Groups, pk=pk)
        group.delete()
        return Response({
            "success": True,
            "message": "Group deleted successfully"
        }, status=status.HTTP_204_NO_CONTENT)


