import React from "react";
import {connect} from "react-redux";
import {StateType} from "../Redux/State";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUserCount,
    setUsers,
    unfollow,
    UserType
} from "../Redux/userReduser";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage:(currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}
type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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
    isFetching: boolean
    setIsFetching: (isFetcing: boolean) => void
}

class UsersContainer extends React.Component<UsersApiComponentPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials: true
        }).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{
            withCredentials: true
        }).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setIsFetching(false)
        })

    }
    render() {

        return <div>
            {this.props.isFetching
                ? <Preloader />
                : null}
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
    isFetching: state.usersPage.isFetching
}
}


export const UserContainer = connect<mapStateToPropsType,mapDispatchPropsType,{} ,StateType>(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUserCount, setIsFetching,})(UsersContainer);

