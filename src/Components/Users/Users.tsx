import React from "react";
import {UserType} from "../Redux/userReduser";
import s from './Users.module.css'
type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    users: Array<UserType>
}
function Users(props: UsersPropsType) {
    if (props.users.length === 0){
        props.setUsers([
            {id: 1, photoUrl: "https://w7.pngwing.com/pngs/401/263/png-transparent-residency-productivity-company-avatar-miscellaneous-blue-angle.png",
                followed: false, fullName:'Dmitryi', status: 'i am a boss', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2, photoUrl: "https://w7.pngwing.com/pngs/401/263/png-transparent-residency-productivity-company-avatar-miscellaneous-blue-angle.png",
                followed: true,  fullName:'Sasha', status: 'you want to go to house', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3, photoUrl: "https://w7.pngwing.com/pngs/401/263/png-transparent-residency-productivity-company-avatar-miscellaneous-blue-angle.png",
                followed: false, fullName:'Meda', status: 'i watch this channel', location: {city: 'Magnitogorsk', country: 'Armenia'}},

        ])
    }

return <div>
    {props.users.map(user => {
        return (
           <div key={user.id}>
               <span>
                   <div>
                       <img className={s.img} src={user.photoUrl} alt="image"/>
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
                       <div>{user.fullName}</div>
                       <div>{user.status}</div>
                   </span>
                   <span>
                       <div>{user.location.country}</div>
                       <div>{user.location.city}</div>

                   </span>
               </span>
           </div>
        )
    })}
</div>
}
export default Users