import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom"

import {UserContainer} from "./Components/Users/userContainer";

import HeaderContainer from "./Components/Header/HeaderContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Login from "./Components/Login/Login";



const App = () => {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                < HeaderContainer />
                < Navbar/>
                <div className='App-wrapper-content'>
                    < Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    < Route exact path='/dialogs' render={() => <DialogsContainer />}/>
                    < Route path= '/users' render={() => <UserContainer /> } />
                    < Route path={'/login'} render={() => <Login />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
