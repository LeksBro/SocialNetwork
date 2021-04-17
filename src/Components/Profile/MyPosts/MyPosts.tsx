import React from "react";
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";

import {PostType} from "../../Redux/State";
import {useFormik} from "formik";
import {validate} from "./MyPostsValidate";
type MyPostsPropsType = {
    addPost: (text: string) => void
    posts: Array<PostType>
}

const MyPosts = (props: MyPostsPropsType) => {
    let postElement = props.posts.map((p) => {
        return < Posts message={p.message} likeCount={p.likeCount} key={p.id}/>
    })
    const addPost = (text: string) => {
        props.addPost(text)
    }

    const formik = useFormik({
        initialValues: {
            text: ''
        },
        validate,
        onSubmit: values => {
            addPost(values.text)
            alert(JSON.stringify(values, null, 2));
        },
    });

    return <div>
        <h3>My Post</h3>
        <form onSubmit={formik.handleSubmit}>
            < textarea
                {...formik.getFieldProps('text')}
            />
            {formik.touched.text && formik.errors.text ? (
                <div style={{color: "red"}}>{formik.errors.text}</div>
            ) : null}
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        <div className={s.content}>
            {postElement}
        </div>
    </div>
}
export default MyPosts