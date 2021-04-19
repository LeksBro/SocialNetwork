import {
    DispatchAddMessageType,
    PostType,

} from "./State";
import {ProfileType} from "../Profile/ProfileContainer";
import {profileIPI, usersAPI} from "../API/API";
export type ProfilePageType = {
    postData: Array<PostType>
    profile: ProfileType | null
    status: string
}

let initialState: ProfilePageType = {
    postData: [
        {message: 'How are you', likeCount: 2, id: 1},
        {message: 'hi', likeCount: 0, id: 2},
        {message: 'good morning', likeCount: 22, id: 3},
    ],
    profile:  null,
    status: ''
}
export const profileReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST': {
            return {
                ...state,
                postData: [...state.postData, {message:action.text,likeCount: 0, id: Math.random() + 1}]
            }

        }
        case "SET_USER_PROFILE": {
            return {...state, profile: action.profile}
        }
        case 'SET-STATUS-PROFILE': {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}
export const addPostAC = (text: string): DispatchAddPostType => {
    return {type: 'ADD-POST',text}
}
export const setUserProfile = (profile: {}) => {
    return{type:'SET_USER_PROFILE', profile: profile}
}
export const setStatusProfile = (status: string) => {
    return {type: 'SET-STATUS-PROFILE', status: status}
}
export type setUserProfileType = {
    type: 'SET_USER_PROFILE'
    profile: {}
}
export type DispatchAddPostType = {
    type: 'ADD-POST'
    text: string
}
export type SetStatusProfileType = {
    type: 'SET-STATUS-PROFILE'
    status: string
}
export type ActionType =
    | DispatchAddPostType
    | setUserProfileType
    | DispatchAddMessageType
    | SetStatusProfileType
export const getUserProfile = (userId: string) => {
    return (dispatch: any) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}
export const getUserStatus = (userId: string) => {
    return (dispatch: any) => {
        profileIPI.getStatus(userId)
            .then(response => {
                dispatch(setStatusProfile(response.data))
            })
    }
}
export const updateUserStatus = (status: string) => {
    return (dispatch: any) => {
        profileIPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                dispatch(setStatusProfile(status))
                    }
            })
    }
}