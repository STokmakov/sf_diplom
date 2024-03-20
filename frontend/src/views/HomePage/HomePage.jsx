import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 30 },
  {
    field: 'serialNumberCar',
    headerName: 'Зав. № машины',
    width: 150,
    editable: true,
  },
  {
    field: 'vehicleModel',
    headerName: 'Модель техники',
    width: 140,
    editable: true,
  },
  {
    field: 'engineModel',
    headerName: 'Модель двигателя',
    width: 140,
    editable: true,
  },
  {
    field: 'serialNumberEngine',
    headerName: 'Зав № двигателя',
    width: 140,
    editable: true,
  },
  {
    field: 'transmissionModel',
    headerName: 'Модель трансмиссии',
    width: 140,
    editable: true,
  },
  {
    field: 'serialNumberTransmission',
    headerName: 'Зав. № трансмиссии',
    width: 140,
    editable: true,
  },
  {
    field: 'driveAxleModel',
    headerName: 'Модель ведущего моста',
    width: 140,
    editable: true,
  },
  {
    field: 'serialNumberDriveAxle',
    headerName: 'Зав № ведущего моста',
    width: 140,
    editable: true,
  },
  {
    field: 'steeringAxleModel',
    headerName: 'Модель управляемого моста',
    width: 140,
    editable: true,
  },
  {
    field: 'serialNumberSteeringAxle',
    headerName: 'Зав № управляемого моста',
    width: 140,
    editable: true,
  },
];

const rows = [
  { id: 1, serialNumberCar: 'Snow', vehicleModel: 'Jon', engineModel: 14, serialNumberEngine: 1, transmissionModel: 1, serialNumberTransmission: 1, driveAxleModel: 1, serialNumberDriveAxle: 1, steeringAxleModel: 2, serialNumberSteeringAxle: 3 },
  { id: 2, serialNumberCar: 'Lannister', vehicleModel: 'Cersei', engineModel: 31, serialNumberEngine: 2, transmissionModel: 1, serialNumberTransmission: 1, driveAxleModel: 1, serialNumberDriveAxle: 1, steeringAxleModel: 2, serialNumberSteeringAxle: 3 },
  { id: 3, serialNumberCar: 'Lannister', vehicleModel: 'Jaime', engineModel: 31, serialNumberEngine: 3, transmissionModel: 1, serialNumberTransmission: 1, driveAxleModel: 1, serialNumberDriveAxle: 1, steeringAxleModel: 2, serialNumberSteeringAxle: 3 },
  { id: 4, serialNumberCar: 'Stark', vehicleModel: 'Arya', engineModel: 11, serialNumberEngine: 4, transmissionModel: 1, serialNumberTransmission: 1, driveAxleModel: 1, serialNumberDriveAxle: 1, steeringAxleModel: 2, serialNumberSteeringAxle: 3 },
  { id: 5, serialNumberCar: 'Targaryen', vehicleModel: 'Daenerys', engineModel: null, serialNumberEngine: 7, transmissionModel: 1, serialNumberTransmission: 1, driveAxleModel: 1, serialNumberDriveAxle: 1, steeringAxleModel: 2, serialNumberSteeringAxle: 3 },
  { id: 6, serialNumberCar: 'Melisandre', vehicleModel: null, engineModel: 150, serialNumberEngine: 1, transmissionModel: 1, serialNumberTransmission: 1, driveAxleModel: 1, serialNumberDriveAxle: 1, steeringAxleModel: 2, serialNumberSteeringAxle: 3 },
  { id: 7, serialNumberCar: 'Clifford', vehicleModel: 'Ferrara', engineModel: 44, serialNumberEngine: 6, transmissionModel: 1, serialNumberTransmission: 1, driveAxleModel: 1, serialNumberDriveAxle: 1, steeringAxleModel: 2, serialNumberSteeringAxle: 3 },
  { id: 8, serialNumberCar: 'Frances', vehicleModel: 'Rossini', engineModel: 36, serialNumberEngine: 1, transmissionModel: 1, serialNumberTransmission: 1, driveAxleModel: 1, serialNumberDriveAxle: 1, steeringAxleModel: 2, serialNumberSteeringAxle: 3 },
  { id: 9, serialNumberCar: 'Roxie', vehicleModel: 'Harvey', engineModel: 65, serialNumberEngine: 8, transmissionModel: 1, serialNumberTransmission: 1, driveAxleModel: 1, serialNumberDriveAxle: 1, steeringAxleModel: 2, serialNumberSteeringAxle: 3 },
  { id: 10, serialNumberCar: 'Frances', vehicleModel: 'Rossini', engineModel: 36, serialNumberEngine: 1, transmissionModel: 1, serialNumberTransmission: 1, driveAxleModel: 1, serialNumberDriveAxle: 1, steeringAxleModel: 2, serialNumberSteeringAxle: 3 },
  { id: 11, serialNumberCar: 'Roxie', vehicleModel: 'Harvey', engineModel: 65, serialNumberEngine: 8, transmissionModel: 1, serialNumberTransmission: 1, driveAxleModel: 1, serialNumberDriveAxle: 1, steeringAxleModel: 2, serialNumberSteeringAxle: 3 },
];

export default function Main() {
  return (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="start"
        sx={{ minHeight: '67vh' }}
    >
        <Box 
        sx={{ height: '100%', width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
    </Grid>
  );
}
