import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {addcar} from "@store/app-reducer";


import AddCarPage from "./AddCarPage";

const AddCarReduxForm = reduxForm({form: 'addcar'})(AddCarPage);

const AddCar = (props) => {
  const onSubmit = (formData) => {
      props.addcar(props.access, props.refresh, formData.serialNumberCar, formData.vehicleModel, formData.engineModel, formData.serialNumberEngine,
        formData.transmissionModel, formData.serialNumberTransmission, formData.driveAxleModel, formData.serialNumberDriveAxle, 
        formData.steeringAxleModel, formData.serialNumberSteeringAxle, formData.supplyContract, formData.shippingDate,
        formData.consignee, formData.deliveryAddress, formData.equipment, formData.client, formData.serviceCompany);
      }
  
  // if (props.isAuth) {
  //   return <Navigate to={"/"} />
  // } 

  return (
    <div>
      <AddCarReduxForm
       onSubmit={onSubmit}
       data_vehicles={props.data_vehicles} 
       data_engines={props.data_engines}
       data_transmissions={props.data_transmissions}
       data_driveaxles={props.data_driveaxles}
       data_steeringaxles={props.data_steeringaxles}
       data_clients={props.data_clients}
       data_servicecompanys={props.data_servicecompanys}
      />
    </div>
)}

const mapStateToProps = (state) => ({
  isAuth: state.token.isAuth,
  access: state.token.access,
  refresh: state.token.refresh,
  data_vehicles: state.app.dataVehicle,
  data_engines: state.app.dataEngine,
  data_transmissions: state.app.dataTransmission,
  data_driveaxles: state.app.dataDriveAxle,
  data_steeringaxles: state.app.dataSteeringAxle,
  data_clients: state.app.dataClient,
  data_servicecompanys: state.app.dataServiceCompany
})

export default connect(mapStateToProps, {addcar})(AddCar)

