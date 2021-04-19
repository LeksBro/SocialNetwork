import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, withRouter} from "react-router-dom";
import {Route} from "react-router-dom"

import {UserContainer} from "./Components/Users/userContainer";

import HeaderContainer from "./Components/Header/HeaderContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeTC} from "./Components/Redux/app-reducer";
import {AppStateType} from "./Components/Redux/redux-store";
import Preloader from "./Components/Common/Preloader/Preloader";

type MapDispatchPropsAppType = {
    initializeTC: () => void
}
type AppPropsType= {
    initializeTC: () => void
    initialized: boolean
}
class App extends React.Component<AppPropsType>{
    componentDidMount() {
      this.props.initializeTC()
    }

    render () {
        debugger
        if (!this.props.initialized){
            debugger
            return <Preloader />
        }
        return  <BrowserRouter>
            <div className="App-wrapper">
                < HeaderContainer/>
                < Navbar/>
                <div className='App-wrapper-content'>
                    < Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    < Route exact path='/dialogs' render={() => <DialogsContainer/>}/>
                    < Route path='/users' render={() => <UserContainer/>}/>
                    < Route path={'/login'} render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>

    }
}
const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
      initialized: state.initialized.initialized
  }
}
type MapStateToPropsType = {
    initialized: boolean
}
export default compose<React.ComponentType>(
    connect<MapStateToPropsType,MapDispatchPropsAppType,{}, AppStateType>(MapStateToProps,{initializeTC})
)(App)
