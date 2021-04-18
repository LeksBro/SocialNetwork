import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {StateType} from "../Redux/State";
import {getUserData, logoutThunkCreator,} from "../Redux/auth-Reducer";

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserData: () => void
    logoutThunkCreator: () => void
}
type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerType>{
    componentDidMount() {
        this.props.getUserData()
    }
    render () {
        return <Header {...this.props} />
    }
}
let mapStateToProps =(state: StateType ):MapStateToPropsType => {
    return{
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect<MapStateToPropsType,MapDispatchToPropsType,{},StateType>(mapStateToProps, {getUserData,logoutThunkCreator})(HeaderContainer)