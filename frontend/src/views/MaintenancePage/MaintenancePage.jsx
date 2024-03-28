import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';


export default function MaintenancePage(props) {
  const maintenance = props.maintenance
  
  function viewClick () {
    console.log("clicked");
    } 

  const columns = [
    { field: 'id', headerName: 'ID', width: 10 },
    {
      field: 'typeOfMaintenance',
      headerName: 'Вид ТО',
      renderCell: (params) => (
      <Tooltip title={params.row.typeOfMaintenance.description} >
        {params.row.typeOfMaintenance.name}
        </Tooltip>
      ),
      width: 80,
      editable: true,
    },
    {
      field: 'dataOfMaintenance',
      headerName: 'Дата проведения ТО',
      width: 160,
      editable: true,
    },
    {
      field: 'operatingTime',
      headerName: 'Наработка, м/час',
      width: 160,
      editable: true,
    },
    {
      field: 'workOrderNumber',
      headerName: '№ заказ-наряда',
      width: 180,
      editable: true,
    },
    {
      field: 'workOrderDate',
      headerName: 'Дата заказ-наряда',
      width: 180,
      editable: true,
    },
    {
      field: 'organizationOfMaintenance',
      headerName: 'Организация, проводившая ТО',
      renderCell: (params) => (
        <Tooltip title={params.row.organizationOfMaintenance.description} >
          {params.row.organizationOfMaintenance.name}
          </Tooltip>
        ),
      width: 220,
      editable: true,
    },
    {
      field: 'car',
      headerName: 'Машина',
      renderCell: (params) => (
        <Tooltip title={params.row.serialNumberCar} >
          {params.row.car.serialNumberCar}
          </Tooltip>
        ),
      width: 100,
      editable: true,
    },
    {
      field: 'serviceCompany',
      headerName: 'Сервисная компания',
      renderCell: (params) => (
        <Tooltip title={params.row.serviceCompany.user.username} >
          {params.row.car.serviceCompany.user.username}
          </Tooltip>
        ),
      width: 180,
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
            rows={maintenance}
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
        {(props.role==='MANAGER' || props.role==='CLIENT'  || props.role==='SERVICECOMPANY' ) &&<Link to='/addto'>
        <Button 
            color="red"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }} 
            onClick={e => viewClick()}>
        Добавить информацию о Техническом обслуживании
        </Button>
       </Link>}

 
    </Grid>
  );
}
