# sf_diplom
Дипломный проект: реальный кейс от компании «Силант»

# Установка 
  git clone https://github.com/STokmakov/sf_diplom.git

  cd sf_diplom

  # установка и запуск backend
  cd backend
  .\venv\Scripts\Activate.ps1
  pip install requirements.txt
  python manage.py runserver

  # установка и запуск frontend
  cd frontend
  npm install
  npm start

# Пользователи:

# Менеджер -
имя: man 
пароль: man

# Клиент -
имя: user
пароль: user

# Сервисная компания -
имя: company
пароль: company


## Пример настройки БД при ее создании ##
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
UserAccount.objects.create_user(username='man',password='man',role='MANAGER')
UserAccount.objects.create_user(username='user',password='user',role='CLIENT')
UserAccount.objects.create_user(username='company',password='company',role='SERVICECOMPANY')


# изменение пароля
python manage.py changepassword *username*


# заполнение справочников из консоли:
python manage.py shell 

# модели машин
from app.models import VehicleModel

VehicleModel.objects.create_vehicle(name='Audi',description='немецкая автомобилестроительная компания в составе концерна Volkswagen Group, специализирующаяся на выпуске автомобилей под маркой Audi')
VehicleModel.objects.create_vehicle(name='Bentley',description='британская автомобилестроительная компания, специализирующаяся на производстве автомобилей класса «люкс»')
VehicleModel.objects.create_vehicle(name='BMW',description='немецкий производитель автомобилей, мотоциклов, двигателей, а также велосипедов')
VehicleModel.objects.create_vehicle(name='Cadillac',description='американский производитель автомобилей класса «люкс»')

# модели двигателей
from app.models import EngineModel

EngineModel.objects.create_enginemodel(name='бензиновый',description='разновидность двигателей внутреннего сгорания, в которых в качестве топлива используется бензин.')
EngineModel.objects.create_enginemodel(name='дизельный',description='поршневой двигатель внутреннего сгорания, работающий по принципу самовоспламенения распылённого топлива от воздействия разогретого при квазиадиабатном сжатии воздуха.')


# Модели трансмиссии
from app.models import TransmissionModel

TransmissionModel.objects.create_transmission(name='Механическая коробка переключения передач',description='коробка передач, в которой переключение передач организовано посредством механического привода.')
TransmissionModel.objects.create_transmission(name='Автоматическая коробка переключения передач',description=' коробка передач, устройство и механика работы которой позволяют ей в процессе движения транспортного средства самостоятельно определять наиболее подходящее доступное передаточное отношение, переходить (переключаться) с одного передаточного отношения на другое, обеспечивать упрощённую для водителя процедуру трогания с места автоматически, наиболее оптимально подстраивая внешнюю скоростную характеристику двигателя под заданную водителем скорость движения в текущих дорожных условиях. АКП есть один из двух (наравне с механической коробкой) широко распространённых типов коробок передач, применяемых на разноплановых колёсных, гусеничных и рельсовых транспортных средствах.')
TransmissionModel.objects.create_transmission(name='Роботизированная коробка переключения передач',description='коробка передач, в которой конструкция узла, ответственного за редукцию и дробление силового диапазона по передачам, в общем и целом выглядит как на механической КП, но при этом сама КП работает автоматически и не требует вмешательства водителя в процесс переключения.')
TransmissionModel.objects.create_transmission(name='Вариативная (бесступенчатая) коробка переключения передач',description='Работа происходит за счет работоспособности двух разных шкивов, которые имеют коническую форму и имеют соединение с помощью цепи или ремня.')


# модели ведущих мостов
from app.models import DriveAxleModel

DriveAxleModel.objects.create_driveaxle(name='задний мост',description='агрегат колёсной или гусеничной машины, соединяющий между собой задние колёса одной оси')
DriveAxleModel.objects.create_driveaxle(name='передний мост',description='комплекс узлов или отдельный агрегат шасси колёсной машины, соединяющий между собой передние колёса одной оси и служащий опорой передней части машины')


# модели управляемых мостов
from app.models import SteeringAxleModel

SteeringAxleModel.objects.create_steeringaxle(name='разрезной управляемый мост',description='мост, колёса которого имеют независимую подвеску')
SteeringAxleModel.objects.create_steeringaxle(name='неразрезной управляемый мост',description='главная передача вместе с дифференциалом находятся в корпусе, к которому подсоединены или отлиты вместе с ним изначально два кожуха полуосей')


# Вид ТО
from app.models import TypeOfMaintenance

TypeOfMaintenance.objects.create_typeofmaintenance(name='плановое техническое обслуживание',description='технические работы по обслуживанию оборудования, постановка на которое осуществляется в соответствии с требованиями нормативно-технической или эксплуатационной документации.')
TypeOfMaintenance.objects.create_typeofmaintenance(name='сезонное обслуживание',description='подготовка автомобиля к зимнему сезону или к лету. В этот вид входит и замена колес, то есть резины, а также незамерзающей жидкости для зимнего сезона.')


# Организация, проводившая ТО
from app.models import OrganizationOfMaintenance

OrganizationOfMaintenance.objects.create_organizationofmaintenance(name='Первая организация',description='Основная организация проводящая ТО.')
OrganizationOfMaintenance.objects.create_organizationofmaintenance(name='Вторая организация',description='Резервная организация проводящая ТО.')


# Узел отказа
from app.models import FailureNode

FailureNode.objects.create_failurenode(name='Предупреждающие значки на приборной панели',description='Если вы все чаще видите мигающий значок Check Engine, то самое время проверить двигатель. А если загораются и другие индикаторы, то нужно как можно скорее ехать в автосервис на диагностику мотора автомобиля и других узлов. За диагностику вы заплатите намного меньше, чем за капитальный ремонт или замену ДВС.')
FailureNode.objects.create_failurenode(name='Мотор «кушает» много масла и топлива',description='Если расход топливного масла и бензина/дизельного топлива возрос без объективных причин – это тревожный знак. Игнорировать это не стоит – расход будет только расти, ускорится и износ двигателя. постарайтесь как можно быстрее отправиться на СТО, чтобы определить и устранить признаки поломки двигателя автомобиля.')
FailureNode.objects.create_failurenode(name='Перерасход технических жидкостей.',description='Владельцы подержанных иномарок не следят за уровнем тормозной жидкости, антифриза, фреона в кондиционере, масла в коробке передач, трансмиссионной жидкости и жидкости в гидроусилителе. И зря – проверять их уровень нужно регулярно, высокий расход и утечка – признаки неисправностей узлов авто.')
FailureNode.objects.create_failurenode(name='Износ коробки передач.',description='Если «механику» еще можно реанимировать, то автоматические КПП не всегда поддаются ремонту при неисправностях. Стоимость новой коробки зачастую слишком высокая, а запчасть с разборки не прослужит долго.')


# Способ востановления
from app.models import RecoveryMethod

RecoveryMethod.objects.create_recoverymethod(name='Замена неисправной детали',description='Покупка новой детали и замена')
RecoveryMethod.objects.create_recoverymethod(name='Диагностика',description='За диагностику вы заплатите намного меньше, чем за капитальный ремонт или замену ДВС.')
RecoveryMethod.objects.create_recoverymethod(name='Замена машины',description='Основные узлы авто сильно изношены, стоит задуматься о покупке новой машины.')




