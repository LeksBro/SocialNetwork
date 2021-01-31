import React from "react";
import {connect} from "react-redux";
import {StateType} from "../Redux/State";
import {followAC, FollowACType, SetUSerACType, setUsersAC, unfollowAC, UnFollowACType, UserType} from "../Redux/userReduser";
import Users from "./Users";
type DispatchFollowType = (followAC: FollowACType) => void
type DispatchUnfollowType = (unfollowAC: UnFollowACType) => void
type DispatchSetUsersType = (setUsersAC: SetUSerACType) => void
type DispatchAllType = DispatchFollowType & DispatchUnfollowType & DispatchSetUsersType
type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}
type mapStateToPropsType = {
    users: Array<UserType>
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
return {
    users: state.usersPage.users
}
}

const mapDispatchToProps = (dispatch:DispatchAllType ):mapDispatchPropsType => {
return {
    follow: (userID: number) => {
        dispatch(followAC(userID))
    },
    unfollow: (userID: number) => {
        dispatch(unfollowAC(userID))
    },
    setUsers: (users: Array<UserType>) => {
        dispatch(setUsersAC(users) as SetUSerACType )
    },


}
}
export const UserContainer = connect<mapStateToPropsType,mapDispatchPropsType,{} ,StateType>(mapStateToProps, mapDispatchToProps)(Users);