import React from "react";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";


export type PostType = {
    message: string
    likeCount: number
    id: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogPageType = {
    dialogData: Array<DialogType>
    messageData: Array<MessageType>
    newMessageText: string
}
export type ProfilePageType = {
    postData: Array<PostType>
    newPost: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}
export type StoreType = {
    _state: StateType

    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    _rerenderEntireTree: (state: StateType) => void
    dispatch: (action: ActionType ) => void
}
export type DispatchAddPostType = {
    type: 'ADD-POST'
}
export type DispatchChangePostType = {
    type: 'CHANGE-POST-TEXT'
    text: string
}
export type DispatchChangeMessageType = {
    type: 'CHANGE-MESSAGE-TEXT'
    textMessage: string
}
export type DispatchAddMessageType = {
    type: 'ADD-MESSAGE'
}
export type ActionType = DispatchChangePostType | DispatchAddPostType | DispatchChangeMessageType | DispatchAddMessageType
export const store:StoreType  = {
    _state:  {
        profilePage: {
            postData: [
                {message: 'How are you', likeCount: 2, id: 1},
                {message: 'hi', likeCount: 0, id: 2},
                {message: 'good morning', likeCount: 22, id: 3},
            ],
            newPost: 'It-Kamasutra'
        },
        dialogPage: {
            dialogData: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Meda'},
                {id: 3, name: 'Victor'},
                {id: 4, name: 'Alena'},
                {id: 5, name: 'Dasha'},
            ],
            messageData: [
                {id: 1, message: 'i understand'},
                {id: 2, message: 'i understand you'},
                {id: 3, message: 'i see you'},
            ],
            newMessageText: 'NewMessage',
        },
    },
    getState () {
        return this._state
    },
    _rerenderEntireTree  (state: StateType)  {
    },
    dispatch (action:ActionType ) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage =  dialogReducer(this._state.dialogPage, action)
        this._rerenderEntireTree(this._state)
        },
    subscribe (observer: (state: StateType) => void)  {
        this._rerenderEntireTree =  observer
    },
    }





