import React from "react";

import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box

    sx={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 1,
    gridTemplateRows: '1fr',
    gridTemplateAreas: `"footer1 footer2"`,
    }}
    >  
    {/* <Box
      
    > */}
   <Grid 
      display="flex"
      justifyContent="center"
      alignItems="center"
      gridArea= 'footer1'
      xs={2}>
            <Typography
             
             
              variant="h6"
              // noWrap
              // component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'PT Astra Sans Regular',
                // fontWeight: 700,
                letterSpacing: '.3rem',
                // color: 'inherit',
                }}
            > 
                     +7-8352-20-12-09, telegram
            </Typography> 
    </Grid>
    <Grid 
    display="flex"
    justifyContent="center"
    alignItems="center"
    gridArea= 'footer2'
    xs={10}>
            <Typography
              variant="h4"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'PT Astra Sans Regular',
                fontWeight: 700,
                letterSpacing: '.2rem',
                }}
            > 
                Мой Силант 2022
            </Typography> 
            </Grid>
      </Box>

    
  );
}

export default Footer;
