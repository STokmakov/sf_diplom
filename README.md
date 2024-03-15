# sf_diplom
Дипломный проект: реальный кейс от компании «Силант»


# Работа с БД

# 'миграции'
python manage.py makemigrations
# 'таблицы'
python manage.py migrate


# создание учетной записи Администратора
python manage.py createsuperuser


# создание учетных записей из консоли
python manage.py shell 

from users.models import UserAccount
UserAccount.objects.create_user(username='manager',password='manager',role='MANAGER')
UserAccount.objects.create_user(username='user',password='user',role='CLIENT')
UserAccount.objects.create_user(username='company',password='company',role='SERVICECOMPANY')


# изменение пароля
python manage.py changepassword *username*


# заполнение справочников из консоли:
python manage.py shell 


# модели двигателей
from app.models import EngineModel

EngineModel.objects.create_enginemodel(name='задний мост',description='агрегат колёсной или гусеничной машины, соединяющий между собой задние колёса одной оси')
EngineModel.objects.create_enginemodel(name='передний мост',description='комплекс узлов или отдельный агрегат шасси колёсной машины, соединяющий между собой передние колёса одной оси и служащий опорой передней части машины')


# модели управляемых мостов
from app.models import SteeringAxleModel

SteeringAxleModel.objects.create_steeringaxle(name='разрезной управляемый мост',description='мост, колёса которого имеют независимую подвеску')
SteeringAxleModel.objects.create_steeringaxle(name='неразрезной управляемый мост',description='главная передача вместе с дифференциалом находятся в корпусе, к которому подсоединены или отлиты вместе с ним изначально два кожуха полуосей')

# модели ведущих мостов
from app.models import DriveAxleModel

DriveAxleModel.objects.create_driveaxle(name='задний мост',description='агрегат колёсной или гусеничной машины, соединяющий между собой задние колёса одной оси')
DriveAxleModel.objects.create_driveaxle(name='передний мост',description='комплекс узлов или отдельный агрегат шасси колёсной машины, соединяющий между собой передние колёса одной оси и служащий опорой передней части машины')

# модели управляемых мостов
from app.models import SteeringAxleModel

SteeringAxleModel.objects.create_steeringaxle(name='разрезной управляемый мост',description='мост, колёса которого имеют независимую подвеску')
SteeringAxleModel.objects.create_steeringaxle(name='неразрезной управляемый мост',description='главная передача вместе с дифференциалом находятся в корпусе, к которому подсоединены или отлиты вместе с ним изначально два кожуха полуосей')