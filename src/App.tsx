import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom"
import {
    ActionType,
    StateType, StoreType
} from "./Components/Redux/State";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

export type StatePropsType = {
    store: StoreType

}
const App = (props: StatePropsType) => {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                < Header/>
                < Navbar/>
                <div className='App-wrapper-content'>
                    < Route path='/profile' render={() => <Profile store={props.store}  />} />
                    < Route exact path='/dialogs' render={() => <DialogsContainer store={props.store} />}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
