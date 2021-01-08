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
    addNewPost: () => void
    changePostText:(text: string) => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    _rerenderEntireTree: (state: StateType) => void
    dispatch: (action: DispatchAddPostType | DispatchChangePostType ) => void
}
export type DispatchAddPostType = {
    type: 'ADD-POST'
}
export type DispatchChangePostType = {
    type: 'CHANGE-POST-TEXT'
    text: string
}
export type ActionType = DispatchChangePostType | DispatchAddPostType
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
            ]
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

        }
    },

    addNewPost () {
        let newPost = {message: this._state.profilePage.newPost, likeCount: 0, id: Math.random() + 1}
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newPost = ''
        this._rerenderEntireTree(this._state)
    },
    changePostText(text: string) {
        this._state.profilePage.newPost = text
        this._rerenderEntireTree(this._state)
    },

    subscribe (observer: (state: StateType) => void)  {
        this._rerenderEntireTree =  observer
    },
}


