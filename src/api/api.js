import React from "react";
import axios  from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "3eabada8-2a94-4f9b-9d30-c880959bf369"
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
        console.warn("Obsolete method. Please use profileAPI object")
        return profileAPI.getProfile(userId)

    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)

    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status});

    }
}


export const authAPI = {
    getMe() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`);
    },
}