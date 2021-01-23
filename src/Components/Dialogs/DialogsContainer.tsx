import React from "react";
import {addMessageAC, changeMessageTextAC} from "../Redux/dialogReducer";
import Dialogs from "./Dialogs";
import {DialogType, DispatchAddMessageType, DispatchChangeMessageType, MessageType, StateType} from "../Redux/State";
import {connect} from "react-redux";
type AddMessagesType = (addMessageAC: DispatchAddMessageType) => void
type ChangeMessagesType = (changeMessageTextAC: DispatchChangeMessageType) => void
type allDispatchDialogType = AddMessagesType & ChangeMessagesType

type MapDispatchToPropsType = {
    addMessage: () => void
    changeMessageText: (text: string) => void
}
type MapStateToPropsType = {
    dialogs:  Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string

}
const mapStateToProps = (state:StateType ): MapStateToPropsType => {
    return{
        dialogs: state.dialogPage.dialogData,
        messages: state.dialogPage.messageData,
        newMessageText: state.dialogPage.newMessageText,
    }
}
const mapDispatchToProps = (dispatch: allDispatchDialogType ): MapDispatchToPropsType => {
    return{
        addMessage: () => {
            dispatch(addMessageAC())
        },
        changeMessageText: (text: string) => {
            dispatch(changeMessageTextAC(text))
        }
    }
}
export const DialogContainer = connect<MapStateToPropsType,MapDispatchToPropsType, {}, StateType>(mapStateToProps, mapDispatchToProps)(Dialogs);

