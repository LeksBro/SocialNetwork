import React from "react";


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
        switch (action.type) {
            case 'ADD-POST': {
                let newPost = {message: this._state.profilePage.newPost, likeCount: 0, id: Math.random() + 1}
                this._state.profilePage.postData.push(newPost)
                this._state.profilePage.newPost = ''
                this._rerenderEntireTree(this._state)
                break;
            }

            case 'CHANGE-POST-TEXT': {
                this._state.profilePage.newPost = action.text
                this._rerenderEntireTree(this._state)
                break;
            }
            case "ADD-MESSAGE":{
                let newMessage = {id: Math.random() + 1, message: this._state.dialogPage.newMessageText}
                this._state.dialogPage.messageData.push(newMessage)
                this._state.dialogPage.newMessageText = ''
                this._rerenderEntireTree(this._state)
                break;
            }
            case "CHANGE-MESSAGE-TEXT":{
                this._state.dialogPage.newMessageText = action.textMessage
                this._rerenderEntireTree(this._state)
                break;
            }


        }
    },


    subscribe (observer: (state: StateType) => void)  {
        this._rerenderEntireTree =  observer
    },
}
export const addPostAC = (): DispatchAddPostType => {
    return {type: 'ADD-POST'}
}
export const changePostTextAC = (text: string):DispatchChangePostType => {
    return {type: 'CHANGE-POST-TEXT',text: text}
}
export const addMessageAC = (): DispatchAddMessageType => {
    return {type: "ADD-MESSAGE"}
}
export const changeMessageTextAC = (textMessage: string): DispatchChangeMessageType => {
    return {type:"CHANGE-MESSAGE-TEXT", textMessage: textMessage}
}