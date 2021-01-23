import React from "react";
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";

import {PostType} from "../../Redux/State";

type MyPostsPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
    posts: Array<PostType>
    newPost: string
}

const MyPosts = (props: MyPostsPropsType) => {

    let postElement = props.posts.map((p) => {
        return < Posts message={p.message} likeCount={p.likeCount} key={p.id} />
    })
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
            props.addPost()
    }
    const changePost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
                props.updateNewPostText(text)
        }
    }
    return <div className={s.content}>
        <div className={s.block}>
            <div>
            <textarea onChange={changePost} value={props.newPost} ref={newPostElement}></textarea>
            </div>
            <button onClick={addPost}>AddPost</button>

        </div>
        <div className={s.Posts}>
            New Post
        </div>
        {postElement}
    </div>

}
export default MyPosts