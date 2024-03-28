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

        return instance.post(`token/refresh/`, {refresh}).then((res) => {
            if (response.status === 200) {
                dispatch(getRefresh(res.data.access))
                return res;
            }    
            
            else if (response.status === 401) {
                
                return res;
            }
            else {
                return "Error";
            }
          })
        .catch((e) => {
            console.log({refresh});
            console.log("Failed refresh...");
            console.log(e);
            return e;
            })
        },
    
    verify(token) {
        return instance.post(`token/verify/`, {token}).then((res) => {
            console.log("Otvetverify="+res);
            console.log(res);
            return res;
          })
        .catch((e) => {
            console.log('token='+token)
            console.log("Failed verify...");
            console.log(e)
            return e;
            })
        },
    
    me(username, access) {
            const config = {
                headers: { Authorization: `Bearer ${access}` },
            };
            return instance.get(`users/me?username=`+ username, config).then((res) => {
                console.log("Otvet"+res);
                console.log("Account info is received successfully");
                return res;
              })
              .catch((e) => {
                console.log("Failed receiving data...");
                return e; })
    },
}