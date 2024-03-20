import React from "react";
import {NavLink} from "react-router-dom";
import css from './Login.module.css'

const Login = () => {

    return (
        <div className={css.login}>
            <div className={css.login_container}>
    
                <NavLink to="/login" className={css.login_container_log}>Войти</NavLink>
            </div>
        </div>
    )
}

export { Login }