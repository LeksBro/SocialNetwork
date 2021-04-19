
import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../Redux/profileReducer";
import {StateType} from "../Redux/State";
import {RouteComponentProps, withRouter} from "react-router";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";

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
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
}
export type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: string | null
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
        this.props.getUserStatus(userId)

    }

    render () {
        return (

            <Profile profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateUserStatus}/>
        )
    }
}
const mapStateToProps = (state:StateType): MapStateToPropsType  => {
  return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      authorizedUserId: state.auth.userID,
      isAuth: state.auth.isAuth,
  } as MapStateToPropsType
}
export default compose<React.ComponentType>(
    connect<MapStateToPropsType,MapDispatchToPropsType,{}, StateType >(mapStateToProps, {getUserProfile,getUserStatus,updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


