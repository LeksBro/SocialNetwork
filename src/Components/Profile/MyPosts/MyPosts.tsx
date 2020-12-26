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
        <Posts />
        <Posts />
        <Posts />
    </div>

}
export default MyPosts