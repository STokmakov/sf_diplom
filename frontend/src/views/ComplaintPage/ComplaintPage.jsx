import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';


export default function ComplaintPage(props) {
  const complaint = props.complaint
  console.log(complaint)
  
  function viewClick () {
    console.log("clicked");
    } 

  const columns = [
    { field: 'id', headerName: 'ID', width: 10 },
    {
      field: 'dateOfRefusal',
      headerName: 'Дата отказа',
      width: 120,
      editable: true,
    },
    {
      field: 'operatingTime',
      headerName: 'Наработка, м/час',
      width: 140,
      editable: true,
    },
    {
      field: 'failureNode',
      headerName: 'Узел отказа',
      renderCell: (params) => (
        <Tooltip title={params.row.failureNode.description} >
          {params.row.failureNode.name}
          </Tooltip>
        ),
      width: 260,
      editable: true,
    },
    {
      field: 'descriptionOfFailure',
      headerName: 'Описание отказа',
      width: 160,
      editable: true,
    },
    {
      field: 'recoveryMethod',
      headerName: 'Способ восстановления',
      renderCell: (params) => (
        <Tooltip title={params.row.recoveryMethod.description} >
          {params.row.recoveryMethod.name}
          </Tooltip>
        ),
      width: 160,
      editable: true,
    },
    {
      field: 'sparePartsUsed',
      headerName: 'Используемые запасные части',
      width: 220,
      editable: true,
    },
    {
      field: 'restoreDate',
      headerName: 'Дата восстановления',
      width: 180,
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
      <Grid item alignItems="center" xs={12} sm={12} md={12} >
      {props.isAuth &&<Link to='/'>
        <Button 
          color="red"
          variant="contained"
          sx={{ mt: 3, mb: 2 }} 
          onClick={e => viewClick()}>
        Машины
        </Button>
       </Link>}
       {props.isAuth &&<Link to='/to'>
        <Button 
            color="red"
            variant="contained"
            sx={{ mt: 3, mb: 2 }} 
            onClick={e => viewClick()}>
        ТО
        </Button>
       </Link>}
       {props.isAuth &&<Link to='/rec'>
        <Button 
            color="red"
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
            rows={complaint}
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
        {(props.role==='MANAGER'   || props.role==='SERVICECOMPANY') &&<Link to='/addrec'>
        <Button 
            color="red"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }} 
            onClick={e => viewClick()}>
        Добавить Рекламации
        </Button>
       </Link>}

 
    </Grid>
  );
}
