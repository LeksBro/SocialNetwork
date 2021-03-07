
import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../Redux/profileReducer";
import {StateType} from "../Redux/State";
import {Redirect, RouteComponentProps, withRouter} from "react-router";

type ContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}
type PfotosType = {
    small: string
    large: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PfotosType
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}
export type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
}
type PathParamsType = {
    userId: string
}
type ProfileContainerProps = RouteComponentProps<PathParamsType> & OwnPropsType


type OwnPropsType = MapDispatchToPropsType & MapStateToPropsType
class  ProfileContainer extends React.Component<ProfileContainerProps> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }

    render () {
        if (!this.props.isAuth){
            return <Redirect to={'/login'} />
        }
        return (

            <Profile profile={this.props.profile} isAuth={this.props.isAuth}/>
        )
    }
}
const mapStateToProps = (state:StateType): MapStateToPropsType  => {
  return {
      profile: state.profilePage.profile,
      isAuth: state.auth.isAuth
  }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect<MapStateToPropsType,MapDispatchToPropsType,{}, StateType >(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)