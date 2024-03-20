import "@styles/index.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ScanApp } from "@/App";
import { Provider } from 'react-redux';
import { persistor, store } from '@store/store';
import { PersistGate } from 'redux-persist/integration/react';


export const theme = createTheme({
  palette: {
    midnightblue: {
      main: '#163E6C',
      light: '#478BD9',
      dark: '#0D243F',
      contrastText: '#FFFFFF',
    },
    red: {
      main: '#D20A11',
      light: '#F75E63',
      dark: '#7B060A',
      contrastText: '#FFFFFF',
      },
    whiteantique: {
      main: '#EBE6D6',
      light: '#F3F0E7',
      dark: '#AE9958',
      contrastText: '#163E6C',
    },
  },
  typography: {
    fontFamily: [
      'PT Astra Sans Italic',
      'PT Astra Sans Bold',
      'PT Astra Sans Bold Italic',
      'PT Astra Sans Regular'
    ].join(','),
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <ScanApp />
          </ThemeProvider>
        </PersistGate>
      </BrowserRouter>
    </Provider>

);

