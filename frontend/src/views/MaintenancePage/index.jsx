import React from 'react';
import MaintenancePage from "./MaintenancePage";
import {connect} from "react-redux";


const MaintenanceContainer = (props) => {

    return ( 
            <div>
            { props.isAuth  && <MaintenancePage {...props} /> }
            </div>
        )
    }

const mapStateToProps = (state) => ({
    isAuth: state.token.isAuth,
    maintenance: state.app.dataMaintenance,
    role: state.token.role,
    generalData: state.token.username,
    
});

export default connect(mapStateToProps)(MaintenanceContainer) 