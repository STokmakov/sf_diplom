from rest_framework.generics import ListAPIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import permissions
from . import serializer
from . import models


class UserProfile(ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializer.UserProfileSerializer
    queryset = models.UserAccount.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['username']

class СheckToManager(ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializer.ManagerSerializer
    queryset = models.Manager.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['name']


class СheckToClient(ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializer.ClientSerializer
    queryset = models.Client.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['name']


class СheckToServiceCompany(ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializer.ServiceCompanySerializer
    queryset = models.ServiceCompany.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['name']