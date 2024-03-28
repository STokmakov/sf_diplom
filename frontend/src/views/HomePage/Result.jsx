import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';


export default function Result(props) {
  
  const search = props.dataSearch
  console.log(search)
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
  ];

 


  return (


    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="start"
        sx={{ minHeight: '30vh' }}
    >
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
            rows={search}
            columns={columns}
            getRowId={row  =>  row.id}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 1,
                },
              },
            }}
            pageSizeOptions={[1]}
            checkboxSelection
            disableRowSelectionOnClick
          />
             
        </Box>
    </Grid>
  );
}
