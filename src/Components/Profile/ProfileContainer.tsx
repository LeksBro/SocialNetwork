
import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../Redux/profileReducer";
import {StateType} from "../Redux/State";
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
type ProfileContainerPropsType = {
    profile: ProfileType | null
    setUserProfile: (profile: ProfileType) => void
}
class  ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
             .then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render () {
        debugger
        return (

            <Profile profile={this.props.profile}/>
        )
    }
}
const mapStateToProps = (state:StateType): MapStateToPropsType  => {
  return {profile: state.profilePage.profile}
}
export default connect<MapStateToPropsType,MapDispatchToPropsType,{}, StateType >(mapStateToProps, {setUserProfile})(ProfileContainer)