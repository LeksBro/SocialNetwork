import s from "./ProfileInfo.module.css";
import React from "react";

const ProfileInfo = () => {
    return <div >
        <div className={s.Content}><img src="https://img3.goodfon.ru/original/1920x1200/4/dd/abstract-colors-unreal-clouds-1927.jpg"
                  alt="fon"/></div>
        <div className={s.Ava}><img
            src="https://photopict.ru/wp-content/uploads/2019/05/prikol-nye-kartinki-na-avu1.jpg"
            alt="Ava"/>
        </div>
    </div>
}
export default ProfileInfo