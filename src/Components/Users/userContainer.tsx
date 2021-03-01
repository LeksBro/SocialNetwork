import React from "react";
import {connect} from "react-redux";
import {StateType} from "../Redux/State";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUserCount,
    setUsers, toggleIsFolowingProgress,
    unfollow,
    UserType
} from "../Redux/userReduser";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../API/API";
type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage:(currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    toggleIsFolowingProgress: (isFetching: boolean, userId: number) => void
}
type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    folowingInProgress: Array<number>

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
    toggleIsFolowingProgress: (isFetching: boolean, usersId: number) => void
    folowingInProgress: Array<number>
}

class UsersContainer extends React.Component<UsersApiComponentPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUserCount(data.totalCount)
        })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
      usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
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
                folowingInProgress={this.props.folowingInProgress}
                toggleIsFolowingProgress = {this.props.toggleIsFolowingProgress}

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
    isFetching: state.usersPage.isFetching,
    folowingInProgress: state.usersPage.folowingInProgress
}
}


export const UserContainer = connect<mapStateToPropsType,mapDispatchPropsType,{} ,StateType>(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUserCount, setIsFetching,toggleIsFolowingProgress})(UsersContainer);

