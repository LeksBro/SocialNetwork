import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom"
import { StoreType} from "./Components/Redux/State";
import {DialogContainer} from "./Components/Dialogs/DialogsContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                < Header/>
                < Navbar/>
                <div className='App-wrapper-content'>
                    < Route path='/profile' render={() => <Profile />}/>

                    < Route exact path='/dialogs' render={() => <DialogContainer />}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
