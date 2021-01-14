import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, DispatchAddPostType, DispatchChangePostType, PostType, StoreType} from "../Redux/State";
import MyPostsContainer from "./MyPosts/MyPostContainer";
export type ProfilePropsType = {
    store:StoreType
}
const Profile = (props: ProfilePropsType) => {
    return <div className={s.Content}>
           < ProfileInfo />
            < MyPostsContainer store={props.store}/>

        </div>

}
export default Profile