import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import {reduxForm} from "redux-form";
import {connect} from "react-redux";


import AddCarPage from "./AddCarPage";

const AddCarReduxForm = reduxForm({form: 'addcar'})(AddCarPage);

const AddCar = (props) => {
  const onSubmit = (formData) => {
      console.log('test');
      }
  
  if (props.isAuth) {
    return <Navigate to={"/"} />
  } 

  return (
    <div>
      <AddCarReduxForm
       onSubmit={onSubmit}
       data_vehicles={props.data_vehicles} 
       data_engines={props.data_engines}
       data_transmissions={props.data_transmissions}
       data_driveaxles={props.data_driveaxles}
       data_steeringaxles={props.data_steeringaxles}
      />
    </div>
)}

const mapStateToProps = (state) => ({
  isAuth: state.token.isAuth,
  data_vehicles: state.app.dataVehicle,
  data_engines: state.app.dataEngine,
  data_transmissions: state.app.dataTransmission,
  data_driveaxles: state.app.dataDriveAxle,
  data_steeringaxles: state.app.dataSteeringAxle
})

export default connect(mapStateToProps)(AddCar)

