import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {StoreType} from "./State";
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
})
export let store: StoreType = createStore(reducers)