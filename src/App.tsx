import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom"
import {StateType} from "./Components/Redux/State";

export type StatePropsType = {
    state: StateType
    addPost: () => void
    changePost: (text: string) => void
}
const App = (props: StatePropsType) => {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                < Header/>
                < Navbar/>
                <div className='App-wrapper-content'>
                    < Route path='/profile' render={() => <Profile posts={props.state.profilePage.postData} addPost={props.addPost} newPost={props.state.profilePage.newPost} changePost={props.changePost} />} />
                    < Route exact path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogPage.dialogData} messages={props.state.dialogPage.messageData} />}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
