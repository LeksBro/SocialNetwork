import React from "react";
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
type PostType = {
    message: string
    likeCount: number
    id: number
}

const MyPosts = () => {
    let postData: Array<PostType> = [
        {message: 'How are you', likeCount: 2, id: 1},
        {message: 'hi', likeCount: 0, id: 2},
        {message: 'good morning', likeCount: 22, id: 3},
    ]
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
        <Posts message = 'How are you' likeCount = {2}/>
        <Posts message = 'Hi' likeCount = {0}/>
        <Posts message = 'Good morning' likeCount = {22}/>
    </div>

}
export default MyPosts