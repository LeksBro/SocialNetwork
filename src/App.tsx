import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom"
import {DialogType, MessageType, PostType} from "./index";
export type StatePropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    posts: Array<PostType>
}
const App = (props: StatePropsType) => {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                < Header/>
                < Navbar/>
                <div className='App-wrapper-content'>
                    < Route path='/profile' render={() => <Profile posts={props.posts} />} />
                    < Route exact path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
