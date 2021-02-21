import {UserType} from "../Redux/userReduser";
import s from "./Users.module.css";
import userPhoto from "../../Assepts/images/ava.png";
import React from "react";

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
                       <img className={s.img} src={user.photos.small != null ? user.photos.small : userPhoto}
                            alt="image"/>
                   </div>
                   <div>
                       {user.followed
                           ? <button onClick={() => {
                               props.unfollow(user.id)
                           }
                           }>Follow</button>
                           : <button onClick={() => {
                               props.follow(user.id)
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