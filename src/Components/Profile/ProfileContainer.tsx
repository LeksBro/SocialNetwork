
import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../Redux/profileReducer";
import {StateType} from "../Redux/State";
import {RouteComponentProps, withRouter} from "react-router";
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
    setUserProfile: (profile: ProfileType) => void
}
export type MapStateToPropsType = {
    profile: ProfileType | null
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
             .then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render () {
        return (

            <Profile profile={this.props.profile}/>
        )
    }
}
const mapStateToProps = (state:StateType): MapStateToPropsType  => {
  return {profile: state.profilePage.profile}
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect<MapStateToPropsType,MapDispatchToPropsType,{}, StateType >(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)