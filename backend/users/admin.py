from django.contrib import admin

from .models import UserAccount


@admin.register(UserAccount)
class UserAccount(admin.ModelAdmin):
    list_display = ('username', 'password', 'user_role', 'is_active', 'is_staff', 'is_superuser')
    fields = ['username', 'password', 'user_role', 'is_active', 'is_staff', 'is_superuser']
