from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from django.contrib.auth.hashers import make_password

class Manager(models.Model):
    name = models.CharField(max_length=128, unique=True
    description = models.TextField()


    def __str__(self):
        return f'{self.name}'
    
    class Meta:
        verbose_name = 'Менеджер'
        verbose_name_plural = 'Менеджеры'

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
        user.role_auth = False
        user.save(using=self._db)

        return user  


class UserAccount(AbstractBaseUser, PermissionsMixin):
    
    username = models.CharField(max_length=255, unique=True)
    # role_auth = models.OneToOneField(Role, on_delete=models.DO_NOTHING, default=False) 
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
    name = models.OneToOneField(UserAccount, on_delete=models.CASCADE, verbose_name='Пользователь')
    description = models.TextField()
    role = models.ForeignKey(Role, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}'
    
    class Meta:
        verbose_name = 'Сервисная компания'
        verbose_name_plural = 'Сервисные компании'
    
class Client(models.Model):
    name = models.OneToOneField(UserAccount, on_delete=models.CASCADE, verbose_name='Пользователь')
    description = models.TextField()
    role = models.ForeignKey(Role, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}'
    
    class Meta:
        verbose_name = 'Клиент'
        verbose_name_plural = 'Клиенты'

class Manager(models.Model):
    name = models.OneToOneField(UserAccount, on_delete=models.CASCADE, verbose_name='Пользователь')
    description = models.TextField()
    role = models.ForeignKey(Role, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}'
    
    class Meta:
        verbose_name = 'Менеджер'
        verbose_name_plural = 'Менеджеры'