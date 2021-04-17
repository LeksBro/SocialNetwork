import {DialogPageType, DispatchAddMessageType} from "./State";
import {ActionType} from "./profileReducer";
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

}
export const dialogReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            return {
                ...state,
                messageData: [...state.messageData, {id: 4, message: action.text} ],
            }

        }
        default:
            return state


    }
}
export const addMessageAC = (text: string): DispatchAddMessageType => {
    return {type: "ADD-MESSAGE", text}
}
