import { authAPI } from "../api/auth-api";
import { dataAPI } from "../api/data-api";
import { getdataCarFull, getdataMaintenance, getdataComplaint } from "./app-reducer";
// const cookie = require('cookie');


const SET_USER_LOGIN = 'SET_USER_LOGIN'
const SET_USER_REFRESH = 'SET_USER_REFRESH'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    username: null,
    access: null,
    refresh: null,
    isAuth: false,
    role: null,
    id: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_LOGIN':
            return {
                ...state,
                ...action.payload
            }
        case 'SET_USER_REFRASH':
            return {
                ...state,
                ...action.payload
            }
        case 'SET_USER_PROFILE':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserLogin =
    (username, access, refresh, isAuth, role, id) => ({
        type: SET_USER_LOGIN, payload: {username, access, refresh, isAuth, role, id}
    })

export const setRefresh =
    (access) => ({
        type: SET_USER_REFRESH, payload: {access}
    })

export const setUserProfile =
    (id, role) => ({
        type: SET_USER_PROFILE, payload: {id, role}
})

export const getAuthUserLogin = (username, access, refresh) => async (dispatch) => {
    dispatch(setAuthUserLogin(username, access, refresh, true, null, null));
    }   

export const getRefresh = (access) => async (dispatch) => {
    dispatch(setRefresh(access));
    }  

export const getUserProfile = (id, role) => async (dispatch) => {
    dispatch(setUserProfile(id, role));
    } 

export const login = (username, password) => async (dispatch) => {
  let response = await authAPI.login(username, password);
    if (response.status === 200) {
        let { access, refresh } = response.data
        dispatch(getAuthUserLogin(username, access, refresh))
        let responseprofile = await authAPI.me(username, access);
            if (responseprofile.status === 200) {
                let { id=0, role } = responseprofile.data[0]
                    if (id != 0) {
                        dispatch(getUserProfile(id, role))                            
                    }
            }
            else {
                console.log('no id')
            }
        let responseCarFull = await dataAPI.getdataCarFull(access);
            if (responseCarFull.status === 200) {
                dispatch(getdataCarFull(responseCarFull.data));
            };

        let responseMaintenance = await dataAPI.getdataMaintenance(access);
            if (responseMaintenance.status === 200) {
                dispatch(getdataMaintenance(responseMaintenance.data));
            };
        
        let responseComplaint = await dataAPI.getdataComplaint(access);
            if (responseComplaint.status === 200) {
                dispatch(getdataComplaint(responseComplaint.data));
            };    
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
    dispatch(setAuthUserLogin(null, null, null, false, null, null));
}

export default authReducer;



