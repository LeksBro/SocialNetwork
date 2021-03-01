import axios from "axios";


const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            'API-KEY': '76844ffa-fc6c-4b3e-9385-c7109397f0ad'
        }
    }
)
export const usersAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(respons => respons.data)
    }
}

export const setUnfollow = (userID: number) => {
    return instance.delete(`follow/` + userID,)
        .then(response => response.data)
}
export const setFollow = (userID: number) => {
    return instance.post(`follow/` + userID,)
        .then(response => response.data)
}