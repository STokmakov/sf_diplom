import styles from "./Search.module.css";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Field, reduxForm, formValueSelector } from "redux-form";
import { Input } from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function Search(props) {
  const vehicles = props.data_vehicles
  const engines = props.data_engines
  const transmissions = props.data_transmissions
  const driveaxles = props.data_driveaxles
  const steeringaxles = props.data_steeringaxles
  const clients = props.data_clients
  const servicecompanys = props.data_servicecompanys
  return (
      <Grid container component="main" sx={{ height: '100%' }}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              fontFamily= "PT Astra Sans Regular"
              align= 'center'
            >
              Проверьте комплектацию и технические характеристики техники Силант
            </Typography>
            <Box component="form" noValidate onSubmit={props.handleSubmit} sx={{ mt: 2 }}>
            <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
              >
                  Зав. № машины
             </Typography>
              <Field 
                      margin= "normal"
                      placeholder={"0000*"}
                      name={"search"}
                      validate={[required]}
                      component={Input}
                      label="search"
                      autoComplete="search"
                      fontFamily= "PT Astra Sans Regular"
                      autoFocus
                      className={styles.formInput}
              />

              
                <Button
                color="red"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Поиск
               </Button>
              </Box>
            </Box>
        </Grid>

        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: 'url(https://технология-бизнеса.рф/upload/iblock/441/4414b799f76fe91a8b8b83c4bd3a7760.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
      

  );
}   