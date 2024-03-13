from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin, Group
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
        password=make_password(password)
        user.set_password(password)
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
    
    username = models.CharField(max_length=255, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    objects = UserAccountManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.username
    
    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    
class ServiceCompany(models.Model):
    name = models.ForeignKey(UserAccount, on_delete=models.CASCADE, verbose_name='Пользователь')

    def __str__(self):
        return f'{self.name}'
    
    class Meta:
        verbose_name = 'Сервисная компания'
        verbose_name_plural = 'Сервисные компании'

    
class Client(models.Model):
    name = models.OneToOneField(UserAccount, on_delete=models.CASCADE, verbose_name='Пользователь')

    def __str__(self):
        return f'{self.name}'
    
    class Meta:
        verbose_name = 'Клиент'
        verbose_name_plural = 'Клиенты'


class Manager(models.Model):
    name = models.OneToOneField(UserAccount, on_delete=models.CASCADE, verbose_name='Пользователь')
    
    def __str__(self):
        return f'{self.name}'
    
    class Meta:
        verbose_name = 'Менеджер'
        verbose_name_plural = 'Менеджеры'


