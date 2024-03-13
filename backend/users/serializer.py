from rest_framework import serializers
from . import models

class UserProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.UserAccount
    fields = ('id',)

class ManagerSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Manager
    fields = ('id', 'name')


class ClientSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Manager
    fields = ('id', 'name')


class ServiceCompanySerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Manager
    fields = ('id', 'name')