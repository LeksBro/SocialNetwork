import React from "react";
import {UserType} from "../Redux/userReduser";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../Assepts/images/ava.png'
type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    users: Array<UserType>
}
function Users(props: UsersPropsType) {
    let getUsers = () => {
        if (props.users.length === 0){
            axios.get(' https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }


return <div>
    <button onClick={getUsers}>GetUsers</button>
    {props.users.map(user => {
        return (
           <div key={user.id}>
               <span>
                   <div>
                       <img className={s.img} src={user.photos.small != null? user.photos.small: userPhoto } alt="image"/>
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
                       }>Unfollow</button> }

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