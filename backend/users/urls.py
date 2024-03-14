from django.urls import path
from .views import СheckToManager, СheckToClient, СheckToServiceCompany, UserProfile

urlpatterns = [
    path('me', UserProfile.as_view()),
    path('manager', СheckToManager.as_view()),
    path('client/', СheckToClient.as_view()),
    path('servicecompany/', СheckToServiceCompany.as_view())
]