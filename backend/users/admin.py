from django.contrib import admin
from django.contrib.auth.models import Group

from .models import UserAccount, ServiceCompany, Client, Manager
@admin.register(UserAccount)
class UserAccount(admin.ModelAdmin):
    list_display = ('username', 'password', 'is_active', 'is_staff', 'is_superuser')
    fields = ['username', 'password', 'is_active', 'is_staff', 'is_superuser']


admin.site.unregister(Group)


@admin.register(ServiceCompany)
class ServiceCompany(admin.ModelAdmin):
    list_display = ['name']
    fields = ['name']

@admin.register(Client)
class Client(admin.ModelAdmin):
    list_display = ['name']
    fields = ['name']

@admin.register(Manager)
class Manager(admin.ModelAdmin):
    list_display = ['name']
    fields = ['name']

