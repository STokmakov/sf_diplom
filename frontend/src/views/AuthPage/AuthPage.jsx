import styles from "./AuthPage.module.css";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {Field} from "redux-form";
import { Input } from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";



function Copyright(props) {
  return (
    <Typography variant="body2" color="midnightblue.main" align="center" {...props}>
      {'Copyright ©  '}
      <Link color="inherit" href="http://127.0.0.1:8080/">
        "Мой Силант"
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function AuthPage(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };

  return (

      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://preview.zen.car/zencar-backend-prod/FileObject/Article/325/photos/asw3.jpg.740x555_q85_box-81,0,739,494_crop_detail_upscale-4090b957-ddc9-40dc-9704-d193f952c99f.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor:  (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
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
            <Avatar sx={{ m: 1, bgcolor: 'red.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={props.handleSubmit} sx={{ mt: 2 }}>
              <Field 
                      margin="normal"
                      placeholder={"username*"}
                      name={"username"}
                      validate={[required]}
                      component={Input}
                      label="username"
                      autoComplete="username"
                      autoFocus
                      className={styles.formInput}
              />
              <Field  
                      margin="normal"
                      placeholder={"password*"}
                      name={"password"}
                      type={"password"}
                      validate={[required]}
                      component={Input}
                      label="Password"
                      autoComplete="current-password"
                      className={styles.formInput}
              />
              <Button
                color="red"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>

  );
}