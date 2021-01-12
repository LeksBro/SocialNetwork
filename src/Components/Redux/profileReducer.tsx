import {ActionType, DispatchAddPostType, DispatchChangePostType, ProfilePageType} from "./State";

export const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {message: state.newPost, likeCount: 0, id: Math.random() + 1}
            state.postData.push(newPost)
            state.newPost = ''
            return state
        }

        case 'CHANGE-POST-TEXT': {
            state.newPost = action.text
            return state
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