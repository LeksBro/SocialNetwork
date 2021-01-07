import React from "react";
import {rerenderEntireTree} from "../../render";

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
}
export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}

export let state: StateType = {
    profilePage: {
        postData: [
            {message: 'How are you', likeCount: 2, id: 1},
            {message: 'hi', likeCount: 0, id: 2},
            {message: 'good morning', likeCount: 22, id: 3},
        ]
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
}
export function addPost (postText: string) {

   let newPost = {message:postText, likeCount: 0, id: Math.random() + 1}
   state.profilePage.postData.push(newPost)
    rerenderEntireTree(state)
}