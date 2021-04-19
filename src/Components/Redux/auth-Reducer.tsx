
import {authApi} from "../API/API";
import {Dispatch} from "redux";
import {validate} from "../Login/LoginValidate";
let initialState :AuthStateType = {
    userID: null ,
    email: null,
    login: null,
    isAuth: false
}
export type AuthStateType = {
    userID: null | string
    email:  null | string
    login:  null | string
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
                isAuth: action.data.isAuth
            }
        }
        default :
            return state as ReturnAuthReducerType

    }
}


export const setAuthUserData = (data:AuthStateType )  => {
    return { type: 'SET_USER_DATA', data: data } as const
}
export type setUserDataType = ReturnType<typeof setAuthUserData>

type AllActionType = setUserDataType
export default authReducer


export const getUserData = () => (dispatch: Dispatch<setUserDataType>) => {
    debugger
       return  authApi.me()
            .then(response => {
                let {userID, email, login} = response.data.data
                if (response.data.resultCode === 0){
                    dispatch(setAuthUserData({userID, email, login, isAuth:true}))
                }
            })
    }

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
             authApi.login(email, password, rememberMe)
            .then((response) => {
                if (response.data.resultCode === 0){
                    dispatch(getUserData())
                }
            })
}
export const logoutThunkCreator = () => (dispatch:Dispatch<AllActionType> ) => {

    authApi.logout()
        .then((response) => {
            if (response.data.resultCode === 0){
                const authDate = {
                    userID: null,
                    email: null,
                    login: null,
                    isAuth:false
                }
                dispatch(setAuthUserData(authDate))
            }
        })
}
