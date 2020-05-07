import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "905ba1ce-e17f-4a75-b84a-27ffb040192d"}
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)},
    follow(userId) {
        return instance.post(`follow/${userId}`)},
    authMe(){
        return instance.get(`auth/me`)
    },
    getProfile(userId){
        return instance.get(`profile/` + userId)
    }
};