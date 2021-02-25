import Header from "./Header";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../Redux/State";
import {DataACType, setAuthUserData} from "../Redux/auth-Reducer";
type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    setAuthUserData: (data:DataACType) => void
}
type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerType>{
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        }).then(response => {
            let userID = response.data.data.id
          let { email, login} = response.data.data
            if (response.data.resultCode === 0){
                this.props.setAuthUserData({userID, email, login})
            }

        })
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

export default connect<MapStateToPropsType,MapDispatchToPropsType,{},StateType>(mapStateToProps, {setAuthUserData})(HeaderContainer)