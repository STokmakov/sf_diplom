from rest_framework import serializers
from . import models


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.UserAccount
    fields = ('username', 'user_role')