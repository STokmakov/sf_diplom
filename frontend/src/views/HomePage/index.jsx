import React from 'react';
import Fulltable from "./Fulltable";
import Search from './Search';
import Result from './Result';
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import {search} from "@store/app-reducer";

const SearchReduxForm = reduxForm({form: 'search'})(Search);

const HomeContainer = (props) => {

    const onSubmit = (formData) => {
        console.log(props.search(formData.search).then(result => console.log(result)));
        }
    console.log(props.dataSearch)
    return ( 
            <div>
            { !props.isAuth && <SearchReduxForm onSubmit={onSubmit} /> }
            { props.dataSearch && !props.isAuth && <Result 
                dataSearch={props.dataSearch}
            /> }
            { props.isAuth  && <Fulltable {...props} /> }
            </div>
        )
    }


const mapStateToProps = (state) => ({
    isAuth: state.token.isAuth,
    generalData: state.token.username,
    car: state.app.dataCar,
    dataSearch: state.app.dataSearch,
    role: state.token.role,
    
});

export default connect(mapStateToProps,{search})(HomeContainer) 