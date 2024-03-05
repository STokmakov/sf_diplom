import { authAPI } from "../api/auth-api";
import {setAuthUserData} from "./user-reducer";


const SET_USER_LOGIN = 'SET_USER_LOGIN'

let initialState = {
    username: null,    
    token: null,
    expire: null, 
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_LOGIN':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserLogin =
    (username, token, expire, isAuth) => ({
        type: SET_USER_LOGIN, payload: {username, token, expire, isAuth}
    })
  
export const getAuthUserLogin = (username, token, expire) => async (dispatch) => {

    dispatch(setAuthUserLogin(username, token, expire, true));
   
    
      }   

export const login = (username, password) => async (dispatch) => {
  let response = await authAPI.login(username, password);
    if (response.status === 200) {
        let { accessToken, expire } = response.data;
        dispatch(getAuthUserLogin(username, accessToken, expire))
        return "Добро пожаловать!";
    }
    else {
        return "Неверно введены имя и пароль! Попробуйте еще раз.";
    }
}

export const logout = () => async (dispatch) => {
    dispatch(setAuthUserLogin(null, null, null, false));
}

export default authReducer;



