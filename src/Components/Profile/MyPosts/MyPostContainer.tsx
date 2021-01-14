import React from "react";
import {addPostAC, changePostTextAC} from "../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {ProfilePropsType} from "../Profile";


const MyPostsContainer = (props: ProfilePropsType) => {
    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }
    const changePost = (text: string) => {

            props.store.dispatch(changePostTextAC(text))
    }
    return <div >
       <MyPosts updateNewPostText={changePost} addPost={addPost} posts={state.profilePage.postData} newPost={state.profilePage.newPost} />
    </div>

}
export default MyPostsContainer

