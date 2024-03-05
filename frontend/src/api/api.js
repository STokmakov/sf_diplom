import axios from "axios";

export const instance = axios.create({
    withCredentials: false,
    baseURL: ' http://127.0.0.1:8000/api/',
    headers: {
        "Content-Type": "application/json",
      },
    
  
});




