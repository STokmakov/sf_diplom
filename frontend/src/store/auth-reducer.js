import { authAPI } from "../api/auth-api";
const cookie = require('cookie');


const SET_USER_LOGIN = 'SET_USER_LOGIN'
const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    username: null, 
    access: null,
    refresh: null,
    isAuth: false
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
        default:
            return state;
    }
}

export const setAuthUserLogin =
    (username, access, refresh, isAuth) => ({
        type: SET_USER_LOGIN, payload: {username, access, refresh, isAuth}
    })

export const setRefresh =
    (access) => ({
        type: SET_USER_DATA, payload: {access}
    })
  
export const getAuthUserLogin = (username, access, refresh) => async (dispatch) => {
    dispatch(setAuthUserLogin(username, access, refresh, true));
    }   

export const getRefresh = (access) => async (dispatch) => {
    dispatch(setRefresh(access));
    }  

export const login = (username, password) => async (dispatch) => {
  let response = await authAPI.login(username, password);
    console.log(response)
    if (response.status === 200) {
        let { access, refresh } = response.data
        dispatch(getAuthUserLogin(username, access, refresh))
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
    dispatch(setAuthUserLogin(null, null, null, false));
}

export default authReducer;



