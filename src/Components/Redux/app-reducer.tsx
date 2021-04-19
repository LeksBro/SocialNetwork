
import {getUserData} from "./auth-Reducer";

const initialState = {
    initialized: false
}
type InitialStateType = typeof initialState

type ActionType = SetInitializedType

export const appReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const setInitializedAC = () => {
    return {type: 'SET-INITIALIZED'} as const
}
export type SetInitializedType = ReturnType<typeof setInitializedAC>

export const initializeTC = () => (dispatch: any) => {
    debugger
    let promise = dispatch(getUserData())
    promise.then(() => {
        dispatch(setInitializedAC())
    })

}