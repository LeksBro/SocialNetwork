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
    let postElement = postData.map((p) => {
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