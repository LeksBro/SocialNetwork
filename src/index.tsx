import ReactDOM from "react-dom";
import App from "./App";
import { store} from "./Components/Redux/redux-store";
import React from "react";
import {StateType} from "./Components/Redux/State";

export const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <App store={store}  />,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(() =>{
    let state = store.getState()
        rerenderEntireTree(state)
}
    )