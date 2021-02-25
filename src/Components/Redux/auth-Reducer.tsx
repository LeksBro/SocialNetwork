import React from "react";
let initialState = {
    userID: null ,
    email: null,
    login: null,
    isAuth: false
}
export type DataACType = {
    userID:  string
    email:  string
    login:  string

}
export type AuthStateType = {
    userID: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}
type ReturnAuthReducerType = {
    userID: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}
const authReducer = (state: AuthStateType = initialState, action: AllActionType): ReturnAuthReducerType => {
    switch (action.type) {
        case 'SET_USER_DATA':{
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default :
            return state as ReturnAuthReducerType

    }
}


export const setAuthUserData = (data: {userID:string , email: string,login: string}): setUserDataType => {
    return { type: 'SET_USER_DATA', data: data }
}
export type setUserDataType = {
    type: 'SET_USER_DATA'
   data:  DataACType

}
type AllActionType = setUserDataType
export default authReducer