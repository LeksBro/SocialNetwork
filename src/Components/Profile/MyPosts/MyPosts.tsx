import React from "react";
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";

import {PostType} from "../../Redux/State";
import {useFormik} from "formik";

type MyPostsPropsType = {
    addPost: (text: string) => void
    posts: Array<PostType>
}

const MyPosts = (props: MyPostsPropsType) => {

    let postElement = props.posts.map((p) => {
        return < Posts message={p.message} likeCount={p.likeCount} key={p.id} />
    })

    const addPost = (text: string) => {
            props.addPost(text)
    }

    const formik = useFormik({
        initialValues: {
            text: '',
        },
        onSubmit: values => {
            addPost(formik.values.text)
            alert(JSON.stringify(values, null, 2));
        },
    });

    return <div className={s.content}>
        <form onSubmit={formik.handleSubmit} className={s.block}>
            <div>
            <textarea
                name={'text'}
                onChange={formik.handleChange}
                value={formik.values.text}></textarea>
            </div>
            <button
                type={'submit'}
                >AddPost</button>

        </form>
        <div className={s.Posts}>
            New Post
        </div>
        {postElement}
    </div>

}
export default MyPosts

