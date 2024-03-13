# Generated by Django 5.0.3 on 2024-03-13 13:29

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_remove_client_description_remove_manager_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='servicecompany',
            name='name',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь'),
        ),
    ]
