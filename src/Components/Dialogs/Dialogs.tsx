    import React from "react";
    import s from './Dialogs.module.css'
    import Dialog from "./Dialog/Dialog";
    import Message from "./Message/Message"
    import {DialogType, MessageType} from "../Redux/State";
    import {useFormik} from "formik";
    import {validate} from "./DialogsValidate";


    type DialogPropsType = {
        addMessage: (text: string) => void
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

    const addMessage = (text: string) => {
        props.addMessage(text)
    }


    const formik = useFormik({
        initialValues: {
            text: '',
        },
        validate,
        onSubmit: values => {
                addMessage(values.text)
                alert(JSON.stringify(values, null, 2));
        },
    });

    return <div className={s.dialogs}>
        <div className={s.dialogItem}>
             {dialogElement}
        </div>
        <div className={s.messageItem}>
             {messageElement}
        </div>
        <form onSubmit={formik.handleSubmit}>
            <div>
               <textarea
                   {...formik.getFieldProps('text')}
               />
                {formik.touched.text && formik.errors.text ? (
                    <div style={{color: "red"}}>{formik.errors.text}</div>
                ) : null}

            </div>
            <button type="submit">Add Message</button>
        </form>
        </div>
    }

    export default Dialogs