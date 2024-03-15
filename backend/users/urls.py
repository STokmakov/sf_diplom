from django.urls import path
from .views import UserProfile

urlpatterns = [
    path('me', UserProfile.as_view()),
]