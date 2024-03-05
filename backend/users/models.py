from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from django.contrib.auth.hashers import make_password



class UserAccountManager(BaseUserManager):
    def create_user(self, username, password=None):
        """
        Creates and saves a User with the given first_name and password.
        """
        if not username:
            raise ValueError('Users must provide a first_name to create an account')
        
        user = self.model(
            username=username,
        )
        user.set_password(username)
        print(password)
        user.save(using=self._db)

        return user  

    def create_superuser(self, username, password=None):
        """
        Creates and saves a superuser with the given username and password.
        """
        user = self.create_user(
            username,
            password=password,
        )

        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user  
    
class UserAccount(AbstractBaseUser, PermissionsMixin):
    CATEGORY_ROLE = (
        ('CLIENT', 'Клиент'),
        ('MANAGER', 'Менеджер'),
        ('SERVICE_ORGANIZATION', 'Сервисная организация'),
    )
    username = models.CharField(max_length=255, unique=True)
    user_role = models.CharField(max_length=25, choices=CATEGORY_ROLE, default='CLIENT')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    objects = UserAccountManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.username

