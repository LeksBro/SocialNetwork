import React from "react";
import {connect} from "react-redux";
import {
    acceptFollow, requestUsersThunkCreater, onPageSizeThunkCreater,
    setCurrentPage,
    setIsFetching,
    setTotalUserCount,
    setUsers, toggleIsFolowingProgress,
    acceptUnfollow,
    UserType
} from "../Redux/userReduser";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../Redux/user-selectors";
import {AppStateType} from "../Redux/redux-store";
type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage:(currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    toggleIsFolowingProgress: (isFetching: boolean, userId: number) => void
    getUsersThunkCreater: (currentPage: number, pageSize: number) => void
    onPageSizeThunkCreater: (pageNumber: number, pageSize: number) => void
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
    getUsersThunkCreater: (currentPage: number, pageSize: number) => void
    onPageSizeThunkCreater: (pageNumber: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersApiComponentPropsType> {

    componentDidMount() {
       /* this.props.setIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUserCount(data.totalCount)
        })*/
        this.props.getUsersThunkCreater(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber: number) => {
       /* this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
      usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setIsFetching(false)
        })*/
       this.props.onPageSizeThunkCreater(pageNumber, this.props.pageSize)

    }
    render() {

        return <div>
            {this.props.isFetching
                ? <Preloader />
                : null}
            <Users
                isFetching = {this.props.isFetching}
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



const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    folowingInProgress: getFollowingProgress(state)
}
}


export const UserContainer = connect<mapStateToPropsType,mapDispatchPropsType,{} ,AppStateType>(mapStateToProps,
    {follow: acceptFollow, unfollow: acceptUnfollow, setUsers,
        setCurrentPage, setTotalUserCount, setIsFetching,
        toggleIsFolowingProgress, getUsersThunkCreater: requestUsersThunkCreater,onPageSizeThunkCreater})(UsersContainer);

