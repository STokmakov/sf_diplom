# Generated by Django 5.0.3 on 2024-03-15 12:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='role',
            field=models.CharField(choices=[('ADMIN', 'Admin'), ('MANAGER', 'Manager'), ('CLIENT', 'Client'), ('SERVICECOMPANY', 'ServiceCompany')], max_length=50),
        ),
    ]