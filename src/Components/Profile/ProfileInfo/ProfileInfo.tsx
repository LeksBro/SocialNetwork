import s from "./ProfileInfo.module.css";
import React from "react";
import {ProfileType} from "../ProfileContainer";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}
const ProfileInfo = (props: ProfileInfoPropsType) => {
   if (!props.profile){
       return <Preloader />
   }

    return <div >
        {/*<div className={s.Content}><img src="https://img3.goodfon.ru/original/1920x1200/4/dd/abstract-colors-unreal-clouds-1927.jpg"
                  alt="fon"/></div>*/}
        <div className={s.Ava}><img
            src= {props.profile.photos.small} alt="Ava" />
        </div>
        <div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
}
export default ProfileInfo