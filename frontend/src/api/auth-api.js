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
        },

    me(username, access) {
        console.log('test='+username)
        return instance.get(`users/me?username=`+ username, {access})
        .catch((e) => {
            console.log("Failed verify...");
            return e;
            })
        },

    manager(name, access) {
        return instance.get(`users/manager/`, {name, access})
        .catch((e) => {
            console.log("Failed verify...");
            return e;
            })
        },

    client(name, access) {
        return instance.get(`users/client/`, {name, access})
        .catch((e) => {
            console.log("Failed verify...");
            return e;
            })
        },

    servicecompany(name, access) {
        return instance.get(`users/servicemanager/?name=`, {name, access})
            .catch((e) => {
                console.log("Failed verify...");
                return e;
            })
        },
}