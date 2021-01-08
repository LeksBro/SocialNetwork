import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../Redux/State";
export type ProfilePriosType = {
    posts: Array<PostType>
    addPost: () => void
    newPost: string
    changePost: (text: string) => void
}
const Profile = (props: ProfilePriosType) => {
    return <div className={s.Content}>
           < ProfileInfo />
            < MyPosts posts={props.posts} addPost={props.addPost} newPost={props.newPost} changePost={props.changePost}/>

        </div>

}
export default Profile