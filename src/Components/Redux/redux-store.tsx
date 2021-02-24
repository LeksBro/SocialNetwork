import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {StoreType} from "./State";
import {userReducer} from "./userReduser";
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: userReducer
})
export let store: StoreType = createStore(reducers)
