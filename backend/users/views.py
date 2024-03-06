from rest_framework.generics import ListAPIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import permissions
from . import serializer
from . import models


class RetriveUserView(ListAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializer.UserSerializer
    queryset = models.UserAccount.objects.all()
    filter_backends = (DjangoFilterBackend, )
    filter_fields = ('username', )
