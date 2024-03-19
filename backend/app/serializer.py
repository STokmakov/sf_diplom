from rest_framework import serializers
from . import models


class VehicleSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.VehicleModel
    fields = ('name', 'description')

class EngineSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.EngineModel
    fields = ('name', 'description')

class TransmissionSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.TransmissionModel
    fields = ('name', 'description')

class DriveAxleSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.DriveAxleModel
    fields = ('name', 'description')

class SteeringAxleSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.SteeringAxleModel
    fields = ('name', 'description')

class TypeOfMaintenanceSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.TypeOfMaintenance
    fields = ('name', 'description')

class OrganizationOfMaintenanceSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.OrganizationOfMaintenance
    fields = ('name', 'description')

class FailureNodeSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.FailureNode
    fields = ('name', 'description')

class RecoveryMethodSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.RecoveryMethod
    fields = ('name', 'description')

class CarSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Car
    fields = ('serialNumberCar', 'vehicleModel', 'engineModel', 'serialNumberEngine', 'transmissionModel', 'serialNumberTransmission',
                        'driveAxleModel', 'serialNumberDriveAxle', 'steeringAxleModel', 'serialNumberSteeringAxle', 'supplyContract', 
                        'shippingDate', 'consignee', 'deliveryAddress', 'equipment', 'client', 'serviceCompany')

class MaintenanceSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Maintenance
    fields = ('typeOfMaintenance', 'dataOfMaintenance', 'operatingTime', 'workOrderNumber', 'workOrderDate', 
                        'organizationOfMaintenance', 'car', 'serviceCompany')

class ComplaintSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Complaint
    fields = ('dateOfRefusal', 'operatingTime', 'failureNode', 'descriptionOfFailure', 'recoveryMethod', 'sparePartsUsed',
                       'restoreDate', 'car')