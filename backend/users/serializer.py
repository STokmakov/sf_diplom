from rest_framework import serializers
from . import models

class UserProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.UserAccount
    fields = ('id','role')



    



