import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostContainer} from "./MyPosts/MyPostContainer";
import {MapStateToPropsType} from "./ProfileContainer";

const Profile = (props: MapStateToPropsType) => {

    return <div className={s.Content}>
           < ProfileInfo profile={props.profile} />
            < PostContainer />

        </div>

}
export default Profile