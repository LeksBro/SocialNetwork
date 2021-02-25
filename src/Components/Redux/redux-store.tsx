import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {StoreType} from "./State";
import {userReducer} from "./userReduser";
import authReducer from "./auth-Reducer";
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: userReducer,
    auth:  authReducer,
})
export let store: StoreType = createStore(reducers)
