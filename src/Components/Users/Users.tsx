import {UserType} from "../Redux/userReduser";
import s from "./userContainer.module.css";
import userPhoto from "../../Assepts/images/ava.png";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
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
                           ? <button onClick={() => {
                               axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/` + user.id, {
                                       withCredentials: true,
                                       headers: {
                                           'API-KEY': '76844ffa-fc6c-4b3e-9385-c7109397f0ad'
                                       }
                                   }
                               ).then(response => {
                                   if (response.data.resultCode === 0) {
                                       props.unfollow(user.id)
                                   }
                               })
                           }
                           }>Follow</button>
                           : <button onClick={() => {
                               axios.post(`https://social-network.samuraijs.com/api/1.0/follow/` + user.id, {}, {
                                       withCredentials: true,
                                       headers: {
                                       'API-KEY': '76844ffa-fc6c-4b3e-9385-c7109397f0ad'
                                   }
                                   }
                               ).then(response => {
                                   if (response.data.resultCode === 0) {
                                       props.follow(user.id)
                                   }
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