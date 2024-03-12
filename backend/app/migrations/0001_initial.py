# Generated by Django 5.0.3 on 2024-03-12 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Car',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('serialNumberCar', models.CharField(max_length=10, unique=True, verbose_name='Зав. № машины')),
                ('serialNumberEngine', models.CharField(max_length=10, verbose_name='Зав № двигателя')),
                ('serialNumberTransmission', models.CharField(max_length=10, verbose_name='Зав. № трансмиссии')),
                ('serialNumberDriveAxle', models.CharField(max_length=10, verbose_name='Зав № ведущего моста')),
                ('serialNumberSteeringAxle', models.CharField(max_length=10, verbose_name='Зав № управляемого моста')),
                ('supplyContract', models.CharField(max_length=20, verbose_name='Договор поставки №, дата')),
                ('shippingDate', models.DateField(verbose_name='Дата отгрузки с завода')),
                ('consignee', models.CharField(max_length=300, verbose_name='Грузополучатель (конечный потребитель)')),
                ('deliveryAddress', models.CharField(max_length=300, verbose_name='Адрес поставки (эксплуатации)')),
                ('equipment', models.CharField(max_length=20, verbose_name='Комплектация (доп. опции)')),
            ],
            options={
                'verbose_name': 'Машина',
                'verbose_name_plural': 'Машины',
            },
        ),
        migrations.CreateModel(
            name='Complaint',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dateOfRefusal', models.DateField(verbose_name='Дата отказа')),
                ('operatingTime', models.CharField(max_length=20, verbose_name='Наработка, м/час')),
                ('descriptionOfFailure', models.TextField(verbose_name='Описание отказа')),
                ('sparePartsUsed', models.TextField(verbose_name='Используемые запасные части')),
                ('restoreDate', models.DateField(verbose_name='Дата восстановления')),
            ],
            options={
                'verbose_name': 'Рекламации',
                'verbose_name_plural': 'Рекламации',
                'ordering': ['-dateOfRefusal'],
            },
        ),
        migrations.CreateModel(
            name='DriveAxleModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Название')),
                ('description', models.CharField(blank=True, max_length=200, null=True, verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'Модель ведущего моста',
                'verbose_name_plural': 'Модели ведущих мостов',
            },
        ),
        migrations.CreateModel(
            name='EngineModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Название')),
                ('description', models.CharField(blank=True, max_length=200, null=True, verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'Модель двигателя',
                'verbose_name_plural': 'Модели двигателей',
            },
        ),
        migrations.CreateModel(
            name='FailureNode',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Название')),
                ('description', models.CharField(blank=True, max_length=200, null=True, verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'Узел отказа',
                'verbose_name_plural': 'Узлы отказа',
            },
        ),
        migrations.CreateModel(
            name='Maintenance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dataOfMaintenance', models.DateField(verbose_name='Дата проведения ТО')),
                ('operatingTime', models.CharField(max_length=20, verbose_name='Наработка, м/час')),
                ('workOrderNumber', models.CharField(max_length=20, verbose_name='№ заказ-наряда')),
                ('workOrderDate', models.DateField(verbose_name='Дата заказ-наряда')),
            ],
            options={
                'verbose_name': 'ТО',
                'verbose_name_plural': 'ТО',
                'ordering': ['-dataOfMaintenance'],
            },
        ),
        migrations.CreateModel(
            name='OrganizationOfMaintenance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Название')),
                ('description', models.CharField(blank=True, max_length=200, null=True, verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'Организация, проводившая ТО',
                'verbose_name_plural': 'Организации, проводившие ТО',
            },
        ),
        migrations.CreateModel(
            name='RecoveryMethod',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Название')),
                ('description', models.CharField(blank=True, max_length=200, null=True, verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'Способ востановления',
                'verbose_name_plural': 'Способы востановления',
            },
        ),
        migrations.CreateModel(
            name='SteeringAxleModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Название')),
                ('description', models.CharField(blank=True, max_length=200, null=True, verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'Модель управляемого моста',
                'verbose_name_plural': 'Модели управляемых мостов',
            },
        ),
        migrations.CreateModel(
            name='TransmissionModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Название')),
                ('description', models.CharField(blank=True, max_length=200, null=True, verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'Модель трансмиссии',
                'verbose_name_plural': 'Модели трансмиссий',
            },
        ),
        migrations.CreateModel(
            name='TypeOfMaintenance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Название')),
                ('description', models.CharField(blank=True, max_length=200, null=True, verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'Вид ТО',
                'verbose_name_plural': 'Виды ТО',
            },
        ),
        migrations.CreateModel(
            name='VehicleModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Название')),
                ('description', models.CharField(blank=True, max_length=200, null=True, verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'Модель техники',
                'verbose_name_plural': 'Модели техники',
            },
        ),
    ]
