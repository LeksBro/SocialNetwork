import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {StoreType} from "./State";
import {userReducer} from "./userReduser";
import authReducer from "./auth-Reducer";
import thunkMiddleware from "redux-thunk"
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: userReducer,
    auth:  authReducer,
})


export let store = createStore(reducers, applyMiddleware(thunkMiddleware))
