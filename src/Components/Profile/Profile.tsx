import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostContainer} from "./MyPosts/MyPostContainer";
import {ProfileType} from "./ProfileContainer";
export type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void

}
const Profile = (props: ProfilePropsType) => {
    return <div className={s.Content}>
           < ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            < PostContainer />

        </div>

}
export default Profile