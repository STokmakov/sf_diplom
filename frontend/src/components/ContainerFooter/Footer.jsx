import React from "react";

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

function Footer() {
  return (

    <Grid container spacing={2}>
        <Grid xs={6}>
            <Typography
              variant="h6"
              align="center"
              noWrap
              component="a"
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
        </Grid>
        <Grid xs={6}>
            <Typography
              variant="h6"
              align="center"
              noWrap
              component="a"
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
                     Мой Силант 2022
            </Typography> 
        </Grid>
    </Grid>
  );
}

export default Footer;
