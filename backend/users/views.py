from rest_framework.views import APIView
from rest_framework import permissions


class RetriveUserView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request):
        pass