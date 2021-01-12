import ReactDOM from "react-dom";
import App from "./App";
import {StateType, store} from "./Components/Redux/State";
import React from "react";

export const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)