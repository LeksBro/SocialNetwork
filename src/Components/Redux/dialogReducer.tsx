import {ActionType, DialogPageType, DispatchAddMessageType, DispatchChangeMessageType} from "./State";

export const dialogReducer = (state: DialogPageType, action: ActionType) => {
    switch (action.type) {
        case "ADD-MESSAGE":{
            let newMessage = {id: Math.random() + 1, message: state.newMessageText}
          state.messageData.push(newMessage)
          state.newMessageText = ''
           return state

        }
        case "CHANGE-MESSAGE-TEXT":{
            state.newMessageText = action.textMessage

          return state
        }
        default:
            return state
    }

}
export const addMessageAC = (): DispatchAddMessageType => {
    return {type: "ADD-MESSAGE"}
}
export const changeMessageTextAC = (textMessage: string): DispatchChangeMessageType => {
    return {type:"CHANGE-MESSAGE-TEXT", textMessage: textMessage}
}