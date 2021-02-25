import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom"
import {DialogContainer} from "./Components/Dialogs/DialogsContainer";
import {UserContainer} from "./Components/Users/userContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                < HeaderContainer />
                < Navbar/>
                <div className='App-wrapper-content'>
                    < Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    < Route exact path='/dialogs' render={() => <DialogContainer />}/>
                    < Route path= '/users' render={() => <UserContainer /> } />


                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
