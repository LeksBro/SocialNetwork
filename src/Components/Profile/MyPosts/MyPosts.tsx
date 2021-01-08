import React from "react";
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {ProfilePriosType} from "../Profile";


const MyPosts = (props: ProfilePriosType) => {

    let postElement = props.posts.map((p) => {
        return < Posts message={p.message} likeCount={p.likeCount} key={p.id} />
    })
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {

            props.addPost({type: 'ADD-POST'})

    }
    const changePost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
                props.changePost({type: 'CHANGE-POST-TEXT', text: text})
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