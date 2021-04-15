import React from "react";
import {addPostAC, DispatchAddPostType, } from "../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {PostType, StateType} from "../../Redux/State";

type dispatchAddPostType = (addPostAC: DispatchAddPostType) => void
type dispatchAllType = dispatchAddPostType
type MapDispatchToPropsType = {
    addPost: (text: string) => void
}
type MapStateToPropsType = {
    posts: Array<PostType>
}

const mapStateToProps = (state: StateType):MapStateToPropsType => {
return {
    posts: state.profilePage.postData,

}
}
const mapDispatchToProps = (dispatch: dispatchAllType):MapDispatchToPropsType => {
    return{
        addPost: (text: string) => {
            dispatch(addPostAC(text))
        }

    }

}

export const PostContainer = connect<MapStateToPropsType,MapDispatchToPropsType, {}, StateType >(mapStateToProps, mapDispatchToProps)(MyPosts)