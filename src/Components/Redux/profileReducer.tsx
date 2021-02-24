import {
    DispatchAddMessageType,
    DispatchChangeMessageType, PostType,

} from "./State";
import {ProfileType} from "../Profile/ProfileContainer";
export type ProfilePageType = {
    postData: Array<PostType>
    newPost: string
    profile: ProfileType | null
}

let initialState: ProfilePageType = {
    postData: [
        {message: 'How are you', likeCount: 2, id: 1},
        {message: 'hi', likeCount: 0, id: 2},
        {message: 'good morning', likeCount: 22, id: 3},
    ],
    newPost: 'It-Kamasutra',
    profile:  null
}
export const profileReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {message: state.newPost, likeCount: 0, id: Math.random() + 1}
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPost: ''
            }
        }

        case 'CHANGE-POST-TEXT': {
            return {
                ...state,
                newPost: action.text
            }
        }
        case "SET_USER_PROFILE": {
            debugger
            return {...state, profile: action.profile}
        }

        default:
            return state
    }
}
export const addPostAC = (): DispatchAddPostType => {
    return {type: 'ADD-POST'}
}
export const changePostTextAC = (text: string):DispatchChangePostType => {
    return {type: 'CHANGE-POST-TEXT',text: text}
}
export const setUserProfile = (profile: {}) => {
    return{type:'SET_USER_PROFILE', profile: profile}
}
export type setUserProfileType = {
    type: 'SET_USER_PROFILE'
    profile: {}
}
export type DispatchAddPostType = {
    type: 'ADD-POST'
}
export type DispatchChangePostType = {
    type: 'CHANGE-POST-TEXT'
    text: string
}
export type ActionType = DispatchChangePostType | DispatchAddPostType | setUserProfileType |DispatchChangeMessageType | DispatchAddMessageType
