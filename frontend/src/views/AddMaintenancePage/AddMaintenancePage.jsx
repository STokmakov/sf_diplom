import styles from "./AddMaintenancePage.module.css";
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
import { Link } from "react-router-dom";


export default function AddMaintenancePage(props) {
  const typeofmaintenances = props.data_typeofmaintenances
  const organizationofmaintenances = props.data_organizationofmaintenances
  const cars = props.data_cars
  console.log(cars)
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
            >
              Добавить информацию о ТО
            </Typography>
            <Box component="form" noValidate onSubmit={props.handleSubmit} sx={{ mt: 2 }}>
            
              <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
              >
                  Вид ТО
             </Typography>
                <Field 
                      name="typeOfMaintenance"
                      component="select"
                      autoFocus
                      className={styles.formSelect}
                >
                  <option></option>
                  {typeofmaintenances.map(item => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                  ))}
                </Field>

                <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                >
                  Дата проведения ТО
                </Typography>
                <Field 
                    component={Input} 
                    type="Date" 
                    name="dataOfMaintenance"
                    validate={[required]}
                />

                <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                >
                  Наработка, м/час
                </Typography>
                <Field 
                      margin= "normal"
                      placeholder={"0000*"}
                      name={"operatingTime"}
                      validate={[required]}
                      component={Input}
                      label="operatingTime"
                      autoComplete="operatingTime"
                      fontFamily= "PT Astra Sans Regular"
                      autoFocus
                      className={styles.formInput}
                />

                <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                >
                  № заказ-наряда
                </Typography>
                <Field 
                      margin= "normal"
                      placeholder={"0000*"}
                      name={"workOrderNumber"}
                      validate={[required]}
                      component={Input}
                      label="workOrderNumber"
                      autoComplete="workOrderNumber"
                      fontFamily= "PT Astra Sans Regular"
                      autoFocus
                      className={styles.formInput}
                />

                <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                >
                  Дата заказ-наряда
                </Typography>
                <Field 
                    component={Input} 
                    type="Date" 
                    name="workOrderDate"
                    validate={[required]}
                />

                <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                >
                  Организация, проводившая ТО
                </Typography>
                <Field 
                      name="organizationOfMaintenance"
                      component="select"
                      autoFocus
                      className={styles.formSelect}
                >
                  <option></option>
                  {organizationofmaintenances.map(item => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                  ))}
                </Field>

                <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                >
                  Машина
                </Typography>
                <Field 
                      name="car"
                      component="select"
                      autoFocus
                      className={styles.formSelect}
                >
                  <option></option>
                  {cars.map(item =>  ( 
                  <option key={item.id} value={item.id}> {item.serialNumberCar} </option>
                    )) }
                </Field> 

                <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                >
                  Сервисная компания
                </Typography>
                <Field 
                      name="serviceCompany"
                      component="select"
                      autoFocus
                      className={styles.formSelect}
                >
                  <option></option>
                  {servicecompanys.map(item =>  ( 
                  <option key={item.id} value={item.id}> {item.user.username} </option>
                    )) }
                </Field> 

                <Button
                color="red"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Сохранить
               </Button>

               <Link to='/to'>
                <Button
                color="red"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Назад
               </Button>
               </Link>

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
