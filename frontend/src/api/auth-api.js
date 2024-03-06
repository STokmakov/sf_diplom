import {instance} from "./api";


export const authAPI = {
     
    login(username, password) {
        return instance.post(`token/`, {username, password})
        .catch((e) => {
            console.log("Failed login...");
            return e;
        })
    },
    
    refresh(refresh) {
        return instance.post(`token/refresh`, {refresh})
        .catch((e) => {
            console.log("Failed refresh...");
            return e;
            })
        },
    
    verify(access) {
        return instance.post(`token/verify`, {access})
        .catch((e) => {
            console.log("Failed verify...");
            return e;
            })
        }
}