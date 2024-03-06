from django.urls import path
from .views import RetriveUserView

urlpatterns = [
    path('me/', RetriveUserView.as_view())
]