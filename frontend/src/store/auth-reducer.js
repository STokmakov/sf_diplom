import { authAPI } from "../api/auth-api";
const cookie = require('cookie');


const SET_USER_LOGIN = 'SET_USER_LOGIN'
const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_ROLE = 'SET_USER_ROLE'

let initialState = {
    username: null, 
    access: null,
    refresh: null,
    isAuth: false,
    role: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_LOGIN':
            return {
                ...state,
                ...action.payload
            }
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload
            }
        case 'SET_USER_ROLE':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserLogin =
    (username, access, refresh, isAuth, role) => ({
        type: SET_USER_LOGIN, payload: {username, access, refresh, isAuth, role}
    })

export const setRefresh =
    (access) => ({
        type: SET_USER_DATA, payload: {access}
    })

export const setUser =
    (access) => ({
        type: SET_USER_ROLE, payload: {role}
    })
  
export const getAuthUserLogin = (username, access, refresh) => async (dispatch) => {
    dispatch(setAuthUserLogin(username, access, refresh, true, null));
    }   

export const getRefresh = (access) => async (dispatch) => {
    dispatch(setRefresh(access));
    }  
export const getUser = (role) => async (dispatch) => {
    dispatch(setUser(role));
    } 

export const login = (username, password) => async (dispatch) => {
  let response = await authAPI.login(username, password);
    if (response.status === 200) {
        console.log(response)
        let { access, refresh } = response.data
        dispatch(getAuthUserLogin(username, access, refresh))
        let responseid = await authAPI.me(username, access);
            if (responseid.status === 200) {
                let { id } = response.data
                console.log(role)
            }
        let responsemanager = await authAPI.manager(id, access);
            if (responsemanager.status === 200) {
                console.log(responsemanager)
                let role  = 'manager'
                console.log(role)
            }
        let responseclient = await authAPI.client(id, access);
            if (responseclient.status === 200) {
                console.log(responseclient)
                let role  = 'client'
                console.log(role)
            }
        let responseservicecompany = await authAPI.servicecompany(id, access);
            if (responseservicecompany.status === 200) {
                console.log(responseservicecompany) 
                let role  = 'servicecompany'
                console.log(role)
            }
   


        // else {
        //     let response = await authAPI.client(access);
        //     if (response.status === 200) {
        //         dispatch(getUser('client'))
        //     }
        //     else {
        //         let response = await authAPI.servicecompany(access);
        //         if (response.status === 200) {
        //             dispatch(getUser('servicecompany'))
        //         }
            //     else {
            //     return "Неверно введены имя и пароль! Попробуйте еще раз.";
            //     }
            // }
        return "Добро пожаловать!";
        }
    
    else {
        return "Неверно введены имя и пароль! Попробуйте еще раз.";
    }
}

export const refresh = (refresh) => async (dispatch) => {
  let response = await authAPI.refresh(refresh);
    console.log(response)
    if (response.status === 200) {
        let { access } = response.data
        dispatch(getRefresh(refresh))
        return "Добро пожаловать!";
    }
    else {
        return "Неверно введены имя и пароль! Попробуйте еще раз.";
    }
}

export const verify = (access) => async (dispatch) => {
  let response = await authAPI.login(access);
    console.log(response)
    if (response.status === 200) {
        return "Ок!";
    }
    else {
        return "Error";
    }
}

export const logout = () => async (dispatch) => {
    dispatch(setAuthUserLogin(null, null, null, false, null));
}

export default authReducer;



