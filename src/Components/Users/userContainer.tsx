import React from "react";
import {connect} from "react-redux";
import {StateType} from "../Redux/State";
import {
    followAC,
    FollowACType, setCurrentPageAC,
    SetCurrentPageACType, setTotalUserCountAC,
    setTotalUserCountACType,
    SetUSerACType, setUsersAC, unfollowAC,
    UnFollowACType,
    UserType
} from "../Redux/userReduser";
import axios from "axios";
import Users from "./Users";
type DispatchTotalUserCount =(setTotalUserCountAC: setTotalUserCountACType) => void
type DispatchSetCurrentPage = (setCurrentPageAC: SetCurrentPageACType) => void
type DispatchFollowType = (followAC: FollowACType) => void
type DispatchUnfollowType = (unfollowAC: UnFollowACType) => void
type DispatchSetUsersType = (setUsersAC: SetUSerACType) => void
type DispatchAllType = DispatchFollowType & DispatchUnfollowType & DispatchSetUsersType & DispatchSetCurrentPage & DispatchTotalUserCount
type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage:(currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
}
type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type UsersApiComponentPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount:(pageNumber: number) => void
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

class UsersContainer extends React.Component<UsersApiComponentPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)

        })

    }
    render() {

        return <div>
            <Users
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                pageSize={this.props.pageSize}

            />
        </div>
    }




}



const mapStateToProps = (state: StateType): mapStateToPropsType => {
return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
    setCurrentPage: (currenPage: number) => {
        dispatch(setCurrentPageAC(currenPage))
    },
    setTotalUserCount: (totalCount: number) => {
        dispatch(setTotalUserCountAC(totalCount))
    },


}
}
export const UserContainer = connect<mapStateToPropsType,mapDispatchPropsType,{} ,StateType>(mapStateToProps, mapDispatchToProps)(UsersContainer);