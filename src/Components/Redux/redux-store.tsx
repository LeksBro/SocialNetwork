import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {userReducer} from "./userReduser";
import authReducer from "./auth-Reducer";
import thunkMiddleware from "redux-thunk"

type ReducerType = typeof reducers
export type AppStateType = ReturnType<ReducerType>
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: userReducer,
    auth:  authReducer,
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))
