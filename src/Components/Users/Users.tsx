import {UserType} from "../Redux/userReduser";
import s from "./userContainer.module.css";
import userPhoto from "../../Assepts/images/ava.png";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {setFollow, setUnfollow} from "../API/API";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleIsFolowingProgress: (isFetching: boolean, userId: number) => void
    folowingInProgress: Array<number>
}
const Users = (props: UsersPropsType) => {


    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div>
        {pages.map(p => {

            return <span
                onClick={() => {
                    props.onPageChanged(p)
                }}
                className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>

        })}


        {props.users.map(user => {
            return (
                <div key={user.id}>
               <span>
                   <div>
                       <NavLink to={"/profile/" + user.id}>
                       <img className={s.img} src={user.photos.small != null ? user.photos.small : userPhoto}
                            alt="image"/>
                       </NavLink>
                   </div>
                   <div>
                       {user.followed
                           ? <button disabled={props.folowingInProgress.some(id => id === user.id)} onClick={() => {
                               props.toggleIsFolowingProgress(true, user.id)
                              setUnfollow(user.id).then(data => {
                                   if (data.resultCode === 0) {
                                       props.unfollow(user.id)
                                   }
                                   props.toggleIsFolowingProgress(false,user.id)
                               })
                           }
                           }>Follow</button>

                           : <button disabled={props.folowingInProgress.some(id => id === user.id)} onClick={() => {
                               props.toggleIsFolowingProgress(true, user.id)
                               setFollow(user.id).then(data => {
                                   if (data.resultCode === 0) {
                                       props.follow(user.id)
                                   }
                               props.toggleIsFolowingProgress(false, user.id)
                               })

                           }
                           }>Unfollow</button>}

                   </div>
               </span>
                    <span>
                   <span>
                       <div>{user.name}</div>
                       <div>{user.status}</div>
                   </span>
                   <span>
                       <div>{'user.location.country'}</div>
                       <div>{'user.location.city'}</div>

                   </span>
               </span>
                </div>
            )
        })}
    </div>
}
export default Users