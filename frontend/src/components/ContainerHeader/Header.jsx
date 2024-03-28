import React from "react";

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Login } from "@components/Login";
import AccountContainer from "@components/Account";
import logoImage from "@assets/images/Logo_1.svg";


const Header = (props) => {

    return (
      <Grid container spacing={2}>
        <Grid 
        display="flex"
        justifyContent="center"
        alignItems="center"
        xs={2}
        >
            <Box
              component="img"
              sx={{
                height: 150,
                width: 200,
                maxHeight: { xs: 150, md: 100 },
                maxWidth: { xs: 200, md: 100 },
                }}
                alt="Logoimg."
                src={logoImage}
            /> 
        </Grid>

        <Grid 
         display="flex"
         justifyContent="center"
         alignItems="center"
         xs={2}
         md={7}>
            <Typography
              variant="h5"
              align="center"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'PT Astra Sans Regular',
                fontWeight: 400,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            > 
                     +7-8352-20-12-09, telegram
            </Typography> 
            </Grid>
             <Grid
             display="flex"
             justifyContent="center"
             alignItems="center"
             xs={3}>
             {props.isAuth ? <AccountContainer /> : <Login />}
        </Grid>
        <Grid
            display="flex"
            justifyContent="center"
            alignItems="center"
            xs={12}>
            <Typography
              variant="h4"
              align="center"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'PT Astra Sans Regular',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            > 
                Электронная сервисная книжка "Мой Силант"
            </Typography>  </Grid>
    </Grid>    

      )
}

export default Header;
       

                  
                  
                  


        

        
