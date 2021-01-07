import ReactDOM from "react-dom";
import App from "./App";
import {addPost, state, StateType} from "./Components/Redux/State";
import React from "react";

export const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
    document.getElementById('root')
);
}