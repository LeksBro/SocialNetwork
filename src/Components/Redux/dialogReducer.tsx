import {ActionType, DialogPageType, DispatchAddMessageType, DispatchChangeMessageType} from "./State";
let initialState: DialogPageType =   {
    dialogData: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Meda'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Alena'},
        {id: 5, name: 'Dasha'},
    ],
        messageData: [
        {id: 1, message: 'i understand'},
        {id: 2, message: 'i understand you'},
        {id: 3, message: 'i see you'},
    ],
        newMessageText: 'NewMessage',
}
export const dialogReducer = (state = initialState, action: ActionType) => {
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