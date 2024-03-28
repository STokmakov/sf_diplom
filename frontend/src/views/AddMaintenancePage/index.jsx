import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {addmaintenance} from "@store/app-reducer";

import AddMaintenancePage from "./AddMaintenancePage";

const AddMaintenanceReduxForm = reduxForm({form: 'addmaintenance'})(AddMaintenancePage);

const AddMaintenance = (props) => {
  const onSubmit = (formData) => {
      props.addmaintenance(props.access, props.refresh, formData.typeOfMaintenance, formData.dataOfMaintenance, formData.operatingTime, formData.workOrderNumber,
        formData.workOrderDate, formData.organizationOfMaintenance, formData.car, formData.serviceCompany );
      }
  
  if (!props.isAuth) {
    return <Navigate to={"/"} />
  } 

  return (
    <div>
      <AddMaintenanceReduxForm
       onSubmit={onSubmit}
       data_typeofmaintenances={props.data_typeofmaintenances} 
       data_organizationofmaintenances={props.data_organizationofmaintenances}
       data_cars={props.data_cars}
       data_servicecompanys={props.data_servicecompanys}
       
      />
    </div>
)}

const mapStateToProps = (state) => ({
  isAuth: state.token.isAuth,
  access: state.token.access,
  refresh: state.token.refresh,
  data_typeofmaintenances: state.app.dataTypeOfMaintenance,
  data_organizationofmaintenances: state.app.dataOrganizationOfMaintenance,
  data_cars: state.app.dataCar,
  data_servicecompanys: state.app.dataServiceCompany,
})

export default connect(mapStateToProps, {addmaintenance})(AddMaintenance)

