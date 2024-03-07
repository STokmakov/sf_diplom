from django.db import models

# Справочники

class VehicleModel(models.Model):
    '''Модель техники'''
    name = models.CharField(max_length=100, unique=True, verbose_name='Название')
    description = models.CharField(max_length=200, verbose_name='Описание', null=True, blank=True)

    def __str__(self):
        return f'{self.name}'
    
    class Meta:
        verbose_name = 'Модель техники'
        verbose_name_plural = 'Модели техники'


class EngineModel(models.Model):
    '''Модель двигателя'''
    name = models.CharField(max_length=100, unique=True, verbose_name='Название')
    description = models.CharField(max_length=200, verbose_name='Описание', null=True, blank=True)

    def __str__(self):
        return f'{self.name}'
    
    class Meta:
        verbose_name = 'Модель двигателя'
        verbose_name_plural = 'Модели двигателей'


class TransmissionModel(models.Model):
    '''Модель трансмиссии'''
    name = models.CharField(max_length=100, unique=True, verbose_name='Название')
    description = models.CharField(max_length=200, verbose_name='Описание', null=True, blank=True)

    def __str__(self):
        return f'{self.name}'
    
    class Meta:
        verbose_name = 'Модель трансмиссии'
        verbose_name_plural = 'Модели трансмиссий'


class DriveAxleModel(models.Model):
    '''Модель ведущего моста'''
    name = models.CharField(max_length=100, unique=True, verbose_name='Название')
    description = models.CharField(max_length=200, verbose_name='Описание', null=True, blank=True)

    def __str__(self):
        return f'{self.name}'
    
    class Meta:
        verbose_name = 'Модель ведущего моста'
        verbose_name_plural = 'Модели ведущих мостов'


class SteeringAxleModel(models.Model):
    '''Модель управляемого моста'''
    name = models.CharField(max_length=100, unique=True, verbose_name='Название')
    description = models.CharField(max_length=200, verbose_name='Описание', null=True, blank=True)

    def __str__(self):
        return f'{self.name}'
    
    class Meta:
        verbose_name = 'Модель управляемого моста'
        verbose_name_plural = 'Модели управляемых мостов'


class TypeOfMaintenance(models.Model):
    '''Вид ТО'''
    name = models.CharField(max_length=100, unique=True, verbose_name='Название')
    description = models.CharField(max_length=200, verbose_name='Описание', null=True, blank=True)

    def __str__(self):
        return f'{self.name}'
    
    class Meta:
        verbose_name = 'Вид ТО'
        verbose_name_plural = 'Виды ТО'


class FailureNode(models.Model):
    '''Узел отказа'''
    name = models.CharField(max_length=100, unique=True, verbose_name='Название')
    description = models.CharField(max_length=200, verbose_name='Описание', null=True, blank=True)

    def __str__(self):
        return f'{self.name}'
    
    class Meta:
        verbose_name = 'Узел отказа'
        verbose_name_plural = 'Узлы отказа'


class RecoveryMethod(models.Model):
    '''Способ востановления'''
    name = models.CharField(max_length=100, unique=True, verbose_name='Название')
    description = models.CharField(max_length=200, verbose_name='Описание', null=True, blank=True)

    def __str__(self):
        return f'{self.name}'
    
    class Meta:
        verbose_name = 'Способ востановления'
        verbose_name_plural = 'Способы востановления'


class ServiceCompany(models.Model):
    '''Сервисная компания'''
    name = models.CharField(max_length=100, unique=True, verbose_name='Название')
    description = models.CharField(max_length=200, verbose_name='Описание', null=True, blank=True)

    def __str__(self):
        return f'{self.name}'
    
    class Meta:
        verbose_name = 'Сервисная компания'
        verbose_name_plural = 'Сервисные компании'

# Ключевая сущность — «машина»
class Car(models.Model):
    '''Машина'''
    serialNumberCar = models.CharField(max_length=10, verbose_name='Зав. № машины')
    vehicleModel = models.ForeignKey(VehicleModel, on_delete=models.CASCADE, verbose_name='Модель техники')
    engineModel = models.ForeignKey(EngineModel, on_delete=models.CASCADE, verbose_name='Модель двигателя')
    serialNumberEngine = models.CharField(max_length=10, verbose_name='Зав № двигателя')
    transmissionModel = models.ForeignKey(TransmissionModel, on_delete=models.CASCADE, verbose_name='Модель трансмиссии')
    serialNumberTransmission = models.CharField(max_length=10, verbose_name='Зав. № трансмиссии')
    driveAxleModel = models.ForeignKey(DriveAxleModel, on_delete=models.CASCADE, verbose_name='Модель ведущего моста')
    serialNumberDriveAxle = models.CharField(max_length=10, verbose_name='Зав № ведущего моста')
    steeringAxleModel = models.ForeignKey(SteeringAxleModel, on_delete=models.CASCADE, verbose_name='Модель управляемого моста')
    serialNumberSteeringAxle = models.CharField(max_length=10, verbose_name='Зав № управляемого моста')
    steeringAxleModel = models.ForeignKey(SteeringAxleModel, on_delete=models.CASCADE, verbose_name='Модель управляемого моста')
    serialNumberSteeringAxle = models.CharField(max_length=10, verbose_name='Зав № управляемого моста')
    supplyContract = models.CharField(max_length=20, verbose_name='Договор поставки №, дата')
    shippingDate = models.DateField(verbose_name='Дата отгрузки с завода', null=False, blank=False)
    consignee = models.CharField(max_length=300, verbose_name='Грузополучатель (конечный потребитель)')


    
