import axios from "axios";


const instance = axios.create({

    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "b1056f8e-5782-4993-9e7b-ed38d6cd308e"
    }
});


export const usersAPI = {
   getUsers(currentPage, pageSize) {
       return instance.get(`users?page=${currentPage}&count=${pageSize}`)
           .then(response => {
               return response.data;
           });
   }
}

