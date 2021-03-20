import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message"
import {DialogType, MessageType} from "../Redux/State";
import {Redirect} from "react-router";


type DialogPropsType = {
    addMessage: () => void
    changeMessageText: (text: string) => void
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

const Dialogs = (props: DialogPropsType) => {

    let dialogElement = props.dialogs.map((d) => {
        return < Dialog id={d.id} name={d.name}/>
    })
    let messageElement = props.messages.map((m) => {
        return < Message key={m.id} message={m.message}/>
    })
    const addMessage = () => {
        props.addMessage()
    }
    const changeMessageText = (event: ChangeEvent<HTMLTextAreaElement>) => {

        props.changeMessageText(event.currentTarget.value)
    }
    return <div className={s.dialogs}>
        <div className={s.dialogItem}>
            {dialogElement}
        </div>
        <div className={s.messageItem}>
            {messageElement}
        </div>
        <div>
            <div>
                <textarea onChange={changeMessageText} value={props.newMessageText}></textarea>
            </div>
            <button onClick={addMessage}>Add Message</button>
        </div>
    </div>
}
export default Dialogs