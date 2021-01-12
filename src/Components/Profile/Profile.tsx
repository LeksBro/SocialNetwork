import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, DispatchAddPostType, DispatchChangePostType, PostType} from "../Redux/State";
export type ProfilePriosType = {
    posts: Array<PostType>
    dispatch: (action: DispatchChangePostType | DispatchAddPostType) => void
    newPost: string

}
const Profile = (props: ProfilePriosType) => {
    return <div className={s.Content}>
           < ProfileInfo />
            < MyPosts posts={props.posts}  newPost={props.newPost} dispatch={props.dispatch}/>

        </div>

}
export default Profile