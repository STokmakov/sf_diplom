import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {addcomplaint} from "@store/app-reducer";


import AddComplaintPage from "./AddComplaintPage";

const AddComplaintReduxForm = reduxForm({form: 'complaint'})(AddComplaintPage);

const AddComplaint = (props) => {
  const onSubmit = (formData) => {
      props.addcomplaint(props.access, props.refresh, formData.dateOfRefusal, formData.operatingTime, formData.failureNode, formData.descriptionOfFailure,
        formData.recoveryMethod, formData.sparePartsUsed, formData.restoreDate, formData.car, 
        );
      }
  
  if (!props.isAuth) {
    return <Navigate to={"/"} />
  } 

  return (
    <div>
      <AddComplaintReduxForm
       onSubmit={onSubmit}
       data_failurenodes={props.data_failurenodes} 
       data_recoverymethods={props.data_recoverymethods} 
       data_cars={props.data_cars}

      />
    </div>
)}

const mapStateToProps = (state) => ({
  isAuth: state.token.isAuth,
  access: state.token.access,
  refresh: state.token.refresh,
  data_failurenodes: state.app.dataFailureNode,
  data_recoverymethods: state.app.dataRecoveryMethod,
  data_cars: state.app.dataCar,
})

export default connect(mapStateToProps, {addcomplaint})(AddComplaint)

