from django.contrib import admin

from .models import VehicleModel, EngineModel, TransmissionModel, DriveAxleModel, SteeringAxleModel, \
                     Car, TypeOfMaintenance


@admin.register(VehicleModel)
class VehicleModel(admin.ModelAdmin):
    list_display = ('name', 'description')
    fields = ['name', 'description']


@admin.register(EngineModel)
class EngineModel(admin.ModelAdmin):
    list_display = ('name', 'description')
    fields = ['name', 'description']


@admin.register(TransmissionModel)
class TransmissionModel(admin.ModelAdmin):
    list_display = ('name', 'description')
    fields = ['name', 'description']


@admin.register(DriveAxleModel)
class DriveAxleModel(admin.ModelAdmin):
    list_display = ('name', 'description')
    fields = ['name', 'description']


@admin.register(SteeringAxleModel)
class SteeringAxleModel(admin.ModelAdmin):
    list_display = ('name', 'description')
    fields = ['name', 'description']


@admin.register(TypeOfMaintenance)
class TypeOfMaintenance(admin.ModelAdmin):
    list_display = ('name', 'description')
    fields = ['name', 'description']


@admin.register(Car)
class Car(admin.ModelAdmin):
    list_display = ('serialNumberCar', 'vehicleModel', 'engineModel', 'serialNumberEngine', 'transmissionModel',
                    'serialNumberTransmission', 'driveAxleModel', 'serialNumberDriveAxle', 'steeringAxleModel',
                     'serialNumberSteeringAxle', 'supplyContract', 'shippingDate', 'consignee', 'deliveryAddress',
                     'equipment', 'client', 'serviceCompany')
    fields = ['serialNumberCar', 'vehicleModel', 'engineModel', 'serialNumberEngine', 'transmissionModel',
              'serialNumberTransmission', 'driveAxleModel', 'serialNumberDriveAxle', 'steeringAxleModel',
                     'serialNumberSteeringAxle', 'supplyContract', 'shippingDate', 'consignee', 'deliveryAddress',
                     'equipment', 'client', 'serviceCompany']




