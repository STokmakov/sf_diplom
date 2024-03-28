import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';


export default function Fulltable(props) {
  const cars = props.car
  
  function viewClick () {
    console.log("clicked");
    } 

  const columns = [
    { field: 'id', headerName: 'ID', width: 10 },
    {
      field: 'serialNumberCar',
      headerName: 'Зав. № машины',
      width: 80,
      editable: true,
    },
    {
      field: 'vehicleModel',
      headerName: 'Модель техники',
      renderCell: (params) => (
      <Tooltip title={params.row.vehicleModel.description} >
        {params.row.vehicleModel.name}
        </Tooltip>
      ),
      width: 100,
      editable: true,
    },
    {
      field: 'engineModel',
      headerName: 'Модель двигателя',
      renderCell: (params) => (
        <Tooltip title={params.row.engineModel.description} >
          {params.row.engineModel.name}
          </Tooltip>
        ),
      width: 100,
      editable: true,
    },
    {
      field: 'serialNumberEngine',
      headerName: 'Зав № двигателя',
      width: 80,
      editable: true,
    },
    {
      field: 'transmissionModel',
      headerName: 'Модель трансмиссии',
      renderCell: (params) => (
      <Tooltip title={params.row.transmissionModel.description} >
        {params.row.transmissionModel.name}
        </Tooltip>
      ),
      width: 100,
      editable: true,
    },
    {
      field: 'serialNumberTransmission',
      headerName: 'Зав. № трансмиссии',
      width: 80,
      editable: true,
    },
    {
      field: 'driveAxleModel',
      headerName: 'Модель ведущего моста',
      renderCell: (params) => (
      <Tooltip title={params.row.driveAxleModel.description} >
        {params.row.driveAxleModel.name}
        </Tooltip>
      ),
      width: 100,
      editable: true,
    },
    {
      field: 'serialNumberDriveAxle',
      headerName: 'Зав № ведущего моста',
      width: 80,
      editable: true,
    },
    {
      field: 'steeringAxleModel',
      headerName: 'Модель управляемого моста',
      renderCell: (params) => (
        <Tooltip title={params.row.steeringAxleModel.description} >
          {params.row.steeringAxleModel.name}
          </Tooltip>
        ),
      width: 100,
      editable: true,
    },
    {
      field: 'serialNumberSteeringAxle',
      headerName: 'Зав № управляемого моста',
      width: 80,
      editable: true,
    },
    {
      field: 'supplyContract',
      headerName: 'Договор поставки №, дата',
      width: 80,
      editable: true,
    },
    {
      field: 'shippingDate',
      headerName: 'Дата отгрузки с завода',
      width: 80,
      editable: true,
    },
    {
      field: 'consignee',
      headerName: 'Грузополучатель (конечный потребитель)',
      width: 80,
      editable: true,
    },
    {
      field: 'deliveryAddress',
      headerName: 'Адрес поставки (эксплуатации)',
      width: 80,
      editable: true,
    },
    {
      field: 'equipment',
      headerName: 'Комплектация (доп. опции)',
      width: 80,
      editable: true,
    },
    {
      field: 'client',
      headerName: 'Клиент',
      renderCell: (params) => (
        <Tooltip title={params.row.client.description} >
          {params.row.client.user.username}
          </Tooltip>
        ),
      width: 80,
      editable: true,
    },
    {
      field: 'serviceCompany',
      headerName: 'Сервисная компания',
      renderCell: (params) => (
        <Tooltip title={params.row.serviceCompany.description} >
          {params.row.serviceCompany.user.username}
          </Tooltip>
        ),
      width: 80,
      editable: true,
    },
  ];

 


  return (


    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="start"
        sx={{ minHeight: '67vh' }}
    >
       <Grid item xs={12} sm={12} md={12} >
      {props.isAuth &&<Link to='/'>
        <Button 
          color="red"
          type="submit"
          // fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }} 
          onClick={e => viewClick()}>
        Машины
        </Button>
       </Link>}
       {props.isAuth &&<Link to='/to'>
        <Button 
            color="red"
            type="submit"
            // fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }} 
            onClick={e => viewClick()}>
        ТО
        </Button>
       </Link>}
       
       {props.isAuth &&<Link to='/rec'>
        <Button 
            color="red"
            type="submit"
            // fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }} 
            onClick={e => viewClick()}>
        Рекламации
        </Button>
       </Link>}
       </Grid>
       {props.isAuth && <Typography
                  component="h1"
                  variant="h5"
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                  style={{color: 'black'}}
              >
                 {props.role} : {props.generalData}
        </Typography>}

       <Typography
                  component="h1"
                  variant="h5"
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                  style={{color: 'red'}}
              >
                  Информация о комплектации и технических 
        </Typography>
        <Typography
                  component="h1"
                  variant="h5"
                  margin= "10px 0px 0px 0px"
                  fontFamily= "PT Astra Sans Regular"
                  style={{color: 'red'}}
              >
                   характеристиках Вашей техники
        </Typography>
        <Box 
        sx={{ height: '100%', width: '100%' }}>
          <DataGrid
            rows={cars}
            columns={columns}
            getRowId={row  =>  row.id}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
             
        </Box>
        {props.role==='MANAGER' && <Link to='/addcar'>
        <Button color="red"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }} 
                onClick={e => viewClick()}>
        Добавить машину
       </Button>
       </Link>}

 
    </Grid>
  );
}
