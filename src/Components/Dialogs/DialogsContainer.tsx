import React from "react";
import {addMessageAC} from "../Redux/dialogReducer";
import Dialogs from "./Dialogs";
import {DialogType, DispatchAddMessageType, MessageType, StateType} from "../Redux/State";
import {connect} from "react-redux";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";
type AddMessagesType = (addMessageAC: DispatchAddMessageType) => void
type allDispatchDialogType = AddMessagesType

type MapDispatchToPropsType = {
    addMessage: (text: string) => void

}
type MapStateToPropsType = {
    dialogs:  Array<DialogType>
    messages: Array<MessageType>


}
const mapStateToProps = (state:StateType ): MapStateToPropsType => {
    return{
        dialogs: state.dialogPage.dialogData,
        messages: state.dialogPage.messageData,

    }
}
const mapDispatchToProps = (dispatch: allDispatchDialogType ): MapDispatchToPropsType => {
    return{
        addMessage: (text) => {
            dispatch(addMessageAC(text))
        },
    }
}
export default compose<React.ComponentType>(
    connect<MapStateToPropsType,MapDispatchToPropsType, {}, StateType>(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)


