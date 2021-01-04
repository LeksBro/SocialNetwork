import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message"
import {DialogType, MessageType} from "../Redux/State";

type DialogPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

const Dialogs = (props: DialogPropsType) => {

    let dialogElement = props.dialogs.map((d) => {
        return < Dialog id={d.id} name={d.name}/>
    })
    let messageElement = props.messages.map((m) => {
        return < Message key={m.id} message={m.message}/>
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