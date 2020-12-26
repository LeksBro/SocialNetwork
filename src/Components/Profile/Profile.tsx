import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return <div className={s.Content}>
            <div><img src="https://img3.goodfon.ru/original/1920x1200/4/dd/abstract-colors-unreal-clouds-1927.jpg"
                      alt="fon"/></div>
            <div className={s.Ava}><img
                src="https://photopict.ru/wp-content/uploads/2019/05/prikol-nye-kartinki-na-avu1.jpg"
                alt="Ava"/>
            </div>
            < MyPosts />

        </div>

}
export default Profile