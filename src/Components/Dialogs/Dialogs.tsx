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


    return <div className={s.dialogs}>
        <div className={s.dialogItem}>
            < Dialog id={1} name={'Sasha'} />
            < Dialog id={2} name={'Meda'} />
            < Dialog id={3} name={'Victor'} />
            < Dialog id={4} name={'Alena'} />
            < Dialog id={5} name={'Dasha'} />
        </div>
        <div className={s.messageItem}>
            < Message message={'i understand'} />
            < Message message={'i understand you'} />
            < Message  message={'i see you'}/>
        </div>
    </div>
}
export default Dialogs