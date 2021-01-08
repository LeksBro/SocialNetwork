import ReactDOM from "react-dom";
import App from "./App";
import {addNewPost, changePostText,state, StateType, subscribe} from "./Components/Redux/State";
import React from "react";

export const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addNewPost} changePost={changePostText}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)
subscribe(rerenderEntireTree)