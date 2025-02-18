from rest_framework import serializers
from .models import CustomUser , Groups
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['name', 'email', 'username', 'password', 'role']

    def create(self, validated_data):
        user = CustomUser(
            name=validated_data['name'],
            email=validated_data['email'],
            username=validated_data['username'],
            password = validated_data['password'],
            role=validated_data['role']
        )

        user.set_password(validated_data['password'])
        user.save()
        return user;


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        print(self.user)

        # Add custom response data
      

        return data




class GroupsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Groups
        fields = ['name', 'cooperative_name']