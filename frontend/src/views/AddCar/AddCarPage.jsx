import styles from "./AddCarPage.module.css";
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


export default function AddCarPage(props) {
  const vehicles = props.data_vehicles
  const engines = props.data_engines
  const transmissions = props.data_transmissions
  const driveaxles = props.data_driveaxles
  const steeringaxles = props.data_steeringaxles

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
              Добавить машину
            </Typography>

            <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
              >
                  Зав. № машины
             </Typography>
              <Field 
                      margin= "normal"
                      placeholder={"0000*"}
                      name={"serialNumberCar"}
                      validate={[required]}
                      component={Input}
                      label="serialNumberCar"
                      autoComplete="serialNumberCar"
                      fontFamily= "PT Astra Sans Regular"
                      autoFocus
                      className={styles.formInput}
              />

              <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
              >
                  Модель техники
             </Typography>
                <Field 
                      name="vehicleModel"
                      component="select"
                      autoFocus
                      className={styles.formSelect}
                >
                  <option></option>
                  {vehicles.map(item => (
                  <option key={item.id} value={item.name}>{item.name}</option>
                  ))}
                </Field>


                <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                >
                  Модель двигателя
                </Typography>
                <Field 
                      name="engineModel"
                      component="select"
                      autoFocus
                      className={styles.formSelect}
                >
                  <option></option>
                  {engines.map(item => (
                  <option key={item.id} value={item.name}>{item.name}</option>
                  ))}
                </Field>


                <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                >
                  Зав № двигателя
                </Typography>
                <Field 
                      margin= "normal"
                      placeholder={"0000*"}
                      name={"serialNumberEngine"}
                      validate={[required]}
                      component={Input}
                      label="serialNumberEngine"
                      autoComplete="serialNumberEngine"
                      fontFamily= "PT Astra Sans Regular"
                      autoFocus
                      className={styles.formInput}
                />


                <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                >
                  Модель трансмиссии
                </Typography>
                <Field 
                      name="transmissionModel"
                      component="select"
                      autoFocus
                      className={styles.formSelect}
                >
                  <option></option>
                  {transmissions.map(item => (
                  <option key={item.id} value={item.name}>{item.name}</option>
                  ))}
                </Field>


                <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                >
                  Зав. № трансмиссии
                </Typography>
                <Field 
                      margin= "normal"
                      placeholder={"0000*"}
                      name={"serialNumberTransmission"}
                      validate={[required]}
                      component={Input}
                      label="serialNumberTransmission"
                      autoComplete="serialNumberTransmission"
                      fontFamily= "PT Astra Sans Regular"
                      autoFocus
                      className={styles.formInput}
                />


                <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                >
                  Модель ведущего моста
                </Typography>
                <Field 
                      name="driveAxleModel"
                      component="select"
                      autoFocus
                      className={styles.formSelect}
                >
                  <option></option>
                  {driveaxles.map(item => (
                  <option key={item.id} value={item.name}>{item.name}</option>
                  ))}
                </Field>


                <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                >
                  Зав № ведущего моста
                </Typography>
                <Field 
                      margin= "normal"
                      placeholder={"0000*"}
                      name={"serialNumberDriveAxle"}
                      validate={[required]}
                      component={Input}
                      label="serialNumberDriveAxle"
                      autoComplete="serialNumberDriveAxle"
                      fontFamily= "PT Astra Sans Regular"
                      autoFocus
                      className={styles.formInput}
                />


                <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                >
                  Модель управляемого моста
                </Typography>
                <Field 
                      name="steeringAxleModel"
                      component="select"
                      autoFocus
                      className={styles.formSelect}
                >
                  <option></option>
                  {steeringaxles.map(item => (
                  <option key={item.id} value={item.name}>{item.name}</option>
                  ))}
                </Field> 


                <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                >
                  Зав № управляемого моста
                </Typography>
                <Field 
                      margin= "normal"
                      placeholder={"0000*"}
                      name={"serialNumberSteeringAxle"}
                      validate={[required]}
                      component={Input}
                      label="serialNumberSteeringAxle"
                      autoComplete="serialNumberSteeringAxle"
                      fontFamily= "PT Astra Sans Regular"
                      autoFocus
                      className={styles.formInput}
                />


                <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                >
                  Договор поставки №, дата
                </Typography>
                <Field 
                      margin= "normal"
                      placeholder={"0000* дд.мм.гггг"}
                      name={"supplyContract"}
                      validate={[required]}
                      component={Input}
                      label="supplyContract"
                      autoComplete="supplyContract"
                      fontFamily= "PT Astra Sans Regular"
                      autoFocus
                      className={styles.formInput}
                />


                <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                >
                  Дата отгрузки с завода
                </Typography>
                <Field 
                    component={Input} 
                    type="Date" 
                    name="shippingDate"
                    validate={[required]}
                />


                <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                >
                  Грузополучатель (конечный потребитель)
                </Typography>
                <Field 
                      margin= "normal"
                      placeholder={"0000*"}
                      name={"consignee"}
                      validate={[required]}
                      component={Input}
                      label="consignee"
                      autoComplete="consignee"
                      fontFamily= "PT Astra Sans Regular"
                      autoFocus
                      className={styles.formInput}
                />


                <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                >
                  Адрес поставки (эксплуатации)
                </Typography>
                <Field 
                      margin= "normal"
                      placeholder={"0000*"}
                      name={"deliveryAddress"}
                      validate={[required]}
                      component={Input}
                      label="deliveryAddress"
                      autoComplete="deliveryAddress"
                      fontFamily= "PT Astra Sans Regular"
                      autoFocus
                      className={styles.formInput}
                />


                <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                >
                  Комплектация (доп. опции)
                </Typography>
                <Field 
                      margin= "normal"
                      placeholder={"0000*"}
                      name={"equipment"}
                      validate={[required]}
                      component={Input}
                      label="equipment"
                      autoComplete="equipment"
                      fontFamily= "PT Astra Sans Regular"
                      autoFocus
                      className={styles.formInput}
                />


                <Typography
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                >
                  Клиент
                </Typography>
                <Field 
                      name="client"
                      component="select"
                      autoFocus
                      className={styles.formSelect}
                >
                  <option></option>
                  {clients.map(item => (
                  <option key={item.id} value={item.name}>{item.name}</option>
                  ))}
                </Field> 



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
