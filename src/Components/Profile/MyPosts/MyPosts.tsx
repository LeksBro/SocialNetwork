import React from "react";
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";

const MyPosts = () => {
    return <div>
        <div>
            <textarea></textarea>
            <button>AddPost</button>
        </div>
        <div className={s.Posts}>
            New Post
        </div>
        <Posts message = 'How are you' likeCount = {2}/>
        <Posts message = 'Hi' likeCount = {0}/>
        <Posts message = 'Good morning' likeCount = {22}/>
    </div>

}
export default MyPosts