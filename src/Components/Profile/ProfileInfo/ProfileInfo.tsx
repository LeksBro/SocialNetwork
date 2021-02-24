import s from "./ProfileInfo.module.css";
import React from "react";
import {MapStateToProps} from "react-redux";
import {MapStateToPropsType} from "../ProfileContainer";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props: MapStateToPropsType) => {
   if (!props.profile){
       return <Preloader />
   }
   
    return <div >
        <div className={s.Content}><img src="https://img3.goodfon.ru/original/1920x1200/4/dd/abstract-colors-unreal-clouds-1927.jpg"
                  alt="fon"/></div>
        <div className={s.Ava}><img
            src= {props.profile.photos.small}
            alt="Ava" />
        </div>
    </div>
}
export default ProfileInfo