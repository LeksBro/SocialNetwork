import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
})
export let store = createStore(reducers)