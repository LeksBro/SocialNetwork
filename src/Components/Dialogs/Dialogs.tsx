import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message"
type DialogType = {
    id:number
    name: string
}
type MessageType = {
    id:number
    message: string
}
const Dialogs = () => {
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

let dialogElement = dialogData.map((d) => {
    return < Dialog id={d.id} name={d.name} />
} )
    let messageElement = messageData.map((m) => {
        return < Message key={m.id} message={m.message}  />
    })
    return <div className={s.dialogs}>
        <div className={s.dialogItem}>
            {dialogElement}
        </div>
        <div className={s.messageItem}>
            {messageElement}
        </div>
    </div>
}
export default Dialogs