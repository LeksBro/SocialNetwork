import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type PostType = {
    message: string
    likeCount: number
    id: number
}
export type DialogType = {
    id:number
    name: string
}
export type MessageType = {
    id:number
    message: string
}
let dialogData: Array<DialogType> = [
    {id: 1, name: 'Sasha'},
    {id: 2, name: 'Meda'},
    {id: 3, name: 'Victor'},
    {id: 4, name: 'Alena'},
    {id: 5, name: 'Dasha'},
]
let messageData: Array<MessageType> = [
    {id: 1, message:'i understand'},
    {id: 2, message:'i understand you'},
    {id: 3, message:'i see you'},
]
let postData: Array<PostType> = [
    {message: 'How are you', likeCount: 2, id: 1},
    {message: 'hi', likeCount: 0, id: 2},
    {message: 'good morning', likeCount: 22, id: 3},
]
ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogData} messages={messageData} posts ={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
