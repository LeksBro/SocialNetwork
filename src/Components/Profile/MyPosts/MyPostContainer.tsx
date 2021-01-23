import React from "react";
import {addPostAC, changePostTextAC} from "../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {DispatchAddPostType, DispatchChangePostType, PostType, StateType} from "../../Redux/State";

type dispatchAddPostType = (addPostAC: DispatchAddPostType) => void
type dispatchUpdateNewPostType = (changePostTextAC:  DispatchChangePostType) => void
type dispatchType = dispatchAddPostType & dispatchUpdateNewPostType
type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}
type MapStateToPropsType = {
    posts: Array<PostType>
    newPost: string
}

const mapStateToProps = (state: StateType):MapStateToPropsType => {
return {
    posts: state.profilePage.postData,
    newPost: state.profilePage.newPost
}
}
const mapDispatchToProps = (dispatch: dispatchType):MapDispatchToPropsType => {
    return{
        updateNewPostText:  (text: string) => {

            dispatch(changePostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }

    }

}

export const PostContainer = connect<MapStateToPropsType,MapDispatchToPropsType, {}, StateType >(mapStateToProps, mapDispatchToProps)(MyPosts)