import { authAPI } from "../api/auth-api";
import { dataAPI } from "../api/data-api";
import { getdataCarFull, getdataMaintenance, getdataComplaint, setdataExit, initializeApp } from "./app-reducer";
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
    console.log(access)
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
                console.log('car')
                dispatch(getdataCarFull(responseCarFull.data));
            };

        let responseMaintenance = await dataAPI.getdataMaintenance(access);
            if (responseMaintenance.status === 200) {
                console.log('maintenance')
                dispatch(getdataMaintenance(responseMaintenance.data));
            };
        
        let responseComplaint = await dataAPI.getdataComplaint(access);
            if (responseComplaint.status === 200) {
                console.log('complaint')
                dispatch(getdataComplaint(responseComplaint.data));
            };    
        return "Добро пожаловать!"; 
    }
    else {
        return "Неверно введены имя и пароль! Попробуйте еще раз.";
    }
}

export const refresh = (refresh) => (dispatch) => {
  
  let response = authAPI.refresh(refresh).then((res) => {
    if (response.status === 200) {
        dispatch(getRefresh(res.data.access))
        return res.data.access;
    }    
    
    else if (response.status === 401) {
        
        return "Error";
    }
    else {
        return "Error";
    }
  })
   }

export const verify = (access) => (dispatch) => {
  let responsev = authAPI.verify(access).then((res) => {
    if (res.status === 200) {   
          console.log("verify_ok")
          console.log(responsev)
          return res;
        }
        else if (res.status === 401) {
          console.log("verify_refresh!")
          console.log(responsev)
          return res;
        }
        else {
            console.log(res)
            return res;
        }
    })
     }
    
export const logout = () => async (dispatch) => {
    dispatch(setAuthUserLogin(null, null, null, false, null, null));
    dispatch(setdataExit(false, null, null, null, null, null, null,
        null, null,  null, null, null, null, null, null, null));
    dispatch(initializeApp());
}


export default authReducer;



