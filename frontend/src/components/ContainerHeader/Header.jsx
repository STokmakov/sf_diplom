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
        <Grid xs={2}>
            <Box
              component="img"
              sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 133, md: 67 },
                maxWidth: { xs: 150, md: 50 },
                }}
                alt="Logoimg."
                src={logoImage}
            /> 
        </Grid>

        <Grid xs={8}>
            <Typography
              variant="h8"
              align="center"
              noWrap
              component="a"
              // href="#app-bar-with-responsive-menu"
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
                     +7-8352-20-12-09, telegram
            </Typography> 
           
            
            <Grid xs={8}>
            <Typography
              variant="h5"
              align="center"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
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
            </Typography>  </Grid> </Grid>
             <Grid xs={2}>
          
             {props.isAuth ? <AccountContainer /> : <Login />}
           
            
           
        </Grid>
    </Grid>    

      )
}

export default Header;
       

                  
                  
                  


        

        
