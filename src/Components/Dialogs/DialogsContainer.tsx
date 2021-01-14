import React from "react";
import {addMessageAC, changeMessageTextAC} from "../Redux/dialogReducer";
import {ProfilePropsType} from "../Profile/Profile";
import Dialogs from "./Dialogs";

const DialogsContainer = (props: ProfilePropsType) => {
let state = props.store.getState()

    const addMessage = () => {
        props.store.dispatch(addMessageAC())
    }
    const changeMessageText = (text: string) => {
        props.store.dispatch(changeMessageTextAC(text))
    }

    return <div>
       < Dialogs addMessage={addMessage}
                 changeMessageText={changeMessageText}
                 dialogs={state.dialogPage.dialogData}
                 messages={state.dialogPage.messageData}
                 newMessageText={state.dialogPage.newMessageText}
       />
    </div>
}
export default DialogsContainer