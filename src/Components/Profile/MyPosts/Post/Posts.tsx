import React from "react";
import s from './Posts.module.css'
type PostPropsType = {
    message: string
    likeCount: number
}
const Posts = (props: PostPropsType) => {
    return (

        <div className={s.item}>
            <img src="https://img1.goodfon.ru/original/1920x1175/d/63/foto-kartinka-art-stil-domo.jpg" alt="ava"/>
            {props.message}
            <div>
                <span>{props.likeCount}</span>
            </div>
        </div>
    )

}
export default Posts