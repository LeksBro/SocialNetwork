import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../index";
export type ProfilePriosType = {
    posts: Array<PostType>
}
const Profile = (props: ProfilePriosType) => {
    return <div className={s.Content}>
           < ProfileInfo />
            < MyPosts posts={props.posts}/>

        </div>

}
export default Profile