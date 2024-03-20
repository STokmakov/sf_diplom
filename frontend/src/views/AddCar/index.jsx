import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import {reduxForm} from "redux-form";
import {connect} from "react-redux";


import AddCarPage from "./AddCarPage";

const AddCarReduxForm = reduxForm({form: 'addcar'})(AddCarPage);

const AddCar = (props) => {
  const onSubmit = (formData) => {
      // console.log(props.login(formData.username, formData.password).then(result => alert(result)));
      }
  
  if (props.isAuth) {
    return <Navigate to={"/"} />
  } 

  return (
    <div>
      <AddCarReduxForm onSubmit={onSubmit} />
    </div>
)}

const mapStateToProps = (state) => ({
  isAuth: state.token.isAuth
})

export default connect(mapStateToProps)(AddCar)

