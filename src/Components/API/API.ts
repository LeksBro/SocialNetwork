import axios from "axios";


const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            'API-KEY': '7d68f88a-b19d-4456-a61f-b1ed7a13dce8'
        }
    }
)
export const usersAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(respons => respons.data)
    },
    setUnfollow  (userID: number)  {
        return instance.delete(`follow/` + userID,)
            .then(response => response.data)
    },
    setFollow  (userID: number)  {
        return instance.post(`follow/` + userID,)
            .then(response => response.data)
    },
    getProfile (userId: string) {
        console.warn('Obsolete method.Please profileAPI object ')
      return  profileIPI.getProfile(userId)

    }
}
export const profileIPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string){
        return instance.get('/profile/status/' + userId)
    },
    updateStatus(status: string) {
        return instance.put('/profile/status',{status: status})
    },
}
export const authApi = {
me () {
   return  instance.get(`auth/me`)
}
}

