import * as axios from "axios";



const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "19dddd67-7759-4968-a840-8072d8c57efb"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {})
            .then(response => {
                return response.data;
            });
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)

    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)

    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)

    },
}


export const authAPI = {
    getMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },
}