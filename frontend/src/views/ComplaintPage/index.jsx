import React from 'react';
import ComplaintPage from "./ComplaintPage";
import {connect} from "react-redux";


const ComplaintContainer = (props) => {

    return ( 
            <div>
            { props.isAuth  && <ComplaintPage {...props} /> }
            </div>
        )
    }

const mapStateToProps = (state) => ({
    isAuth: state.token.isAuth,
    complaint: state.app.dataComplaint,
    role: state.token.role,
    generalData: state.token.username,
    
});

export default connect(mapStateToProps)(ComplaintContainer) 