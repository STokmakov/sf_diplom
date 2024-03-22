import {instance} from "./api";

export const dataAPI = {
     
    getdataVehicle() {
            return instance.get(`app/datavehicle`).then((res) => {
                console.log("Otvet"+res);
                return res;
              })
              .catch((e) => {
                console.log("Failed receiving data...");
                return e; })
    },

    getdataEngine() {
      return instance.get(`app/dataengine`).then((res) => {
          console.log("Otvet"+res);
          return res;
        })
        .catch((e) => {
          console.log("Failed receiving data...");
          return e; })
    },

    getdataTransmission() {
      return instance.get(`app/datatransmission`).then((res) => {
          console.log("Otvet"+res);
          return res;
        })
        .catch((e) => {
          console.log("Failed receiving data...");
          return e; })
    },

    getdataDriveAxle() {
      return instance.get(`app/datadriveaxle`).then((res) => {
          console.log("Otvet"+res);
          return res;
        })
        .catch((e) => {
          console.log("Failed receiving data...");
          return e; })
    },

    getdataSteeringAxle() {
      return instance.get(`app/datasteeringaxle`).then((res) => {
          console.log("Otvet"+res);
          return res;
        })
        .catch((e) => {
          console.log("Failed receiving data...");
          return e; })
    },

    getdataTypeOfMaintenance() {
      return instance.get(`app/datatypeofmaintenance`).then((res) => {
          console.log("Otvet"+res);
          return res;
        })
        .catch((e) => {
          console.log("Failed receiving data...");
          return e; })
    },

    getdataOrganizationOfMaintenance() {
      return instance.get(`app/dataorganizationofmaintenance`).then((res) => {
          console.log("Otvet"+res);
          return res;
        })
        .catch((e) => {
          console.log("Failed receiving data...");
          return e; })
    },

    getdataFailureNode() {
      return instance.get(`app/datafailurenode`).then((res) => {
          console.log("Otvet"+res);
          return res;
        })
        .catch((e) => {
          console.log("Failed receiving data...");
          return e; })
    },

    getdataRecoveryMethod() {
      return instance.get(`app/datarecoverymethod`).then((res) => {
          console.log("Otvet"+res);
          return res;
        })
        .catch((e) => {
          console.log("Failed receiving data...");
          return e; })
    },
    
    getdataServiceCompany() {
      return instance.get(`users/servicecompany/`).then((res) => {
          console.log("Otvet"+res);
          return res;
        })
        .catch((e) => {
          console.log("Failed receiving data...");
          return e; })
    },    

    getdataClient() {
      return instance.get(`users/client/`).then((res) => {
          console.log("Otvet"+res);
          return res;
        })
        .catch((e) => {
          console.log("Failed receiving data...");
          return e; })
    },

    getdataCar() {
      return instance.get(`app/datacar`).then((res) => {
          console.log("Otvet"+res);
          return res;
        })
        .catch((e) => {
          console.log("Failed receiving data...");
          return e; })
    },

    getdataCarFull(access) {
      const config = {
        headers: { Authorization: `Bearer ${access}` },
      };
      return instance.get(`app/datacarfull`, config).then((res) => {
          console.log("Otvet"+res);
          return res;
        })
        .catch((e) => {
          console.log("Failed receiving data...");
          return e; })
    },

    getdataMaintenance(access) {
      const config = {
        headers: { Authorization: `Bearer ${access}` },
      };
      return instance.get(`app/datamaintenance`, config).then((res) => {
          console.log("Otvet"+res);
          return res;
        })
        .catch((e) => {
          console.log("Failed receiving data...");
          return e; })
    },
    
    getdataComplaint(access) {
      const config = {
        headers: { Authorization: `Bearer ${access}` },
      };
      return instance.get(`app/datacomplaint`, config).then((res) => {
          console.log("Otvet"+res);
          return res;
        })
        .catch((e) => {
          console.log("Failed receiving data...");
          return e; })
    },

    setaddcar(access, refresh, serialNumberCar, vehicleModel, engineModel, serialNumberEngine,
      transmissionModel, serialNumberTransmission, driveAxleModel, serialNumberDriveAxle, 
      steeringAxleModel, serialNumberSteeringAxle, supplyContract, shippingDate,
      consignee, deliveryAddress, equipment, client, serviceCompany) {
      const config = {
        headers: { Authorization: `Bearer ${access}` },
      };
      const bodyParameters = { 
        "serialNumberCar": {serialNumberCar},
        "vehicleModel": {vehicleModel},
        "engineModel": {engineModel},
        "serialNumberEngine": {serialNumberEngine},
        "transmissionModel": {transmissionModel},
        "serialNumberTransmission": {serialNumberTransmission},
        "driveAxleModel": {driveAxleModel},
        "serialNumberDriveAxle": {serialNumberDriveAxle},
        "steeringAxleModel": {steeringAxleModel},
        "serialNumberSteeringAxle": {serialNumberSteeringAxle},
        "supplyContract": {supplyContract},
        "shippingDate": {shippingDate},
        "consignee": {consignee},
        "deliveryAddress": {deliveryAddress},
        "equipment": {equipment},
        "client": {client},
        "serviceCompany": {serviceCompany}      
      };
      return instance.post(`app/datacar`, bodyParameters, config).then((res) => {
          console.log("Otvet"+res);
          return res;
        })
        .catch((e) => {
          console.log("Failed receiving data...");
          return e; })
    },

}