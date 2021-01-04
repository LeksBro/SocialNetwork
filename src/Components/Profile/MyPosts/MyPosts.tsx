import React from "react";
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {ProfilePriosType} from "../Profile";


const MyPosts = (props: ProfilePriosType) => {

    let postElement = props.posts.map((p) => {
        return < Posts message={p.message} likeCount={p.likeCount} key={p.id} />
    })
    return <div className={s.content}>
        <div className={s.block}>
            <div>
            <textarea></textarea>
            </div>
            <button>AddPost</button>

        </div>
        <div className={s.Posts}>
            New Post
        </div>
        {postElement}
    </div>

}
export default MyPosts