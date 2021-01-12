import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom"
import {
    ActionType, DispatchAddMessageType,
    DispatchAddPostType,
    DispatchChangeMessageType,
    DispatchChangePostType,
    StateType
} from "./Components/Redux/State";

export type StatePropsType = {
    state: StateType
    dispatch: (action: ActionType) => void

}
const App = (props: StatePropsType) => {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                < Header/>
                < Navbar/>
                <div className='App-wrapper-content'>
                    < Route path='/profile' render={() => <Profile posts={props.state.profilePage.postData}  newPost={props.state.profilePage.newPost} dispatch={props.dispatch}  />} />
                    < Route exact path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogPage.dialogData} messages={props.state.dialogPage.messageData} dispatch={props.dispatch} newMessageText={props.state.dialogPage.newMessageText}   />}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
