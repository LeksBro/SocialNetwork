import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostContainer} from "./MyPosts/MyPostContainer";

const Profile = () => {
    return <div className={s.Content}>
           < ProfileInfo />
            < PostContainer />

        </div>

}
export default Profile