import Box from '@mui/material/Box';
import React, { Component} from "react";
import { Routes, Route,  Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router';

import {connect, Provider} from "react-redux";
import {compose} from "redux";

import { store } from "./store/store";
import {initializeApp} from "./store/app-reducer";

import  HeaderContainer    from "@components/ContainerHeader";
import  FooterContainer   from "@components/ContainerFooter";

import  HomeContainer   from "@views/HomePage";
import  ComplaintContainer   from "@views/ComplaintPage";
import MaintenanceContainer from "@views/MaintenancePage";
import  AddCarContainer  from "@views/AddCarPage";
import AddMaintenancePage from './views/AddMaintenancePage';
import AddComplaint from './views/AddComplaintPage';
import  LoginContainer  from "@views/AuthPage";


export const withRouter = (Component) =>{
  const Wrapper = (props) =>{
      const history = useNavigate();
      return <Component history={history} {...props}/>
  } 
  return Wrapper;
}

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        return ( 
            <Box
                sx={{
                width: '100%',
                height: '140px',
                color: '#fff', '& > .MuiBox-root > .MuiBox-root': {
                    p: 1,
                    borderRadius: 2,
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    },
                }}
            >
                <Box
                    sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: 1,
                    gridTemplateRows: '180px auto 80px',
                    gridTemplateAreas: `"header"
                                        "main  "
                                        "footer"`,
                    }}
                >      
                    <Box sx={{ gridArea: 'header', bgcolor: 'red.main' }}><HeaderContainer/></Box>
                    <Box sx={{ gridArea: 'main', bgcolor: 'whiteantique.main' }}>
                        {this.props.isAuth} 
                        <Routes> 
                            <Route path="/" element={<HomeContainer />} /> 
                            <Route path="/login" element={<LoginContainer />} />  
                            {this.props.isAuth && <Route path="/rec" element={<ComplaintContainer />} />  }
                            {this.props.isAuth && <Route path="/to" element={<MaintenanceContainer />} />  }
                            {this.props.role==='MANAGER' && <Route path="/addcar" element={<AddCarContainer />} />  }
                            {(this.props.role==='MANAGER' || this.props.role==='CLIENT' || this.props.role==='SERVICECOMPANY') && <Route path="/addto" element={<AddMaintenancePage />} />  }
                            {(this.props.role==='MANAGER' || this.props.role==='SERVICECOMPANY') && <Route path="/addrec" element={<AddComplaint />} />  } 
                        </Routes>
                    </Box>
                    <Box sx={{ gridArea: 'footer', bgcolor: 'red.main' }}><FooterContainer /></Box>
                </Box>
            </Box>
            
        )
    }}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    isAuth: state.token.isAuth,
    role: state.token.role
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const ScanApp = (props) => {
   return (
    
        <Provider store={store}>
            <AppContainer />
        </Provider>
     
)}

export { ScanApp }