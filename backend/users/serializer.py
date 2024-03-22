from rest_framework import serializers
from . import models
from django.conf import settings

class UserProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.UserAccount
    fields = ('id','role')


class UsersProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.UserAccount
    fields = ('id', 'username')



class ClientProfileSerializer(serializers.ModelSerializer):
  user = UsersProfileSerializer()
  class Meta:
    model = models.ClientProfile
    fields = ('id','user')

class ServiceCompanyProfileSerializer(serializers.ModelSerializer):
  user = UsersProfileSerializer()
  class Meta:
    model = models.ServiceCompanyProfile
    fields = ('id','user')

  # def to_representation(self, instance):
  #    data = super().to_representation(instance)
  #    data['user'] = models.UsersAccount.objects.filter(id={data["user"]})
  #    return data
    



