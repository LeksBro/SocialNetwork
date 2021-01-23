import {ActionType, DispatchAddPostType, DispatchChangePostType, ProfilePageType} from "./State";
let initialState: ProfilePageType = {
    postData: [
        {message: 'How are you', likeCount: 2, id: 1},
        {message: 'hi', likeCount: 0, id: 2},
        {message: 'good morning', likeCount: 22, id: 3},
    ],
    newPost: 'It-Kamasutra'
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