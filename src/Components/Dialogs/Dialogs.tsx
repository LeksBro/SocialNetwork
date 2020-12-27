import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
const Dialogs = () => {
    return <div className={s.dialogs}>
        <div className={s.dialogItem}>
            <div className={s.dialog}><NavLink to={'/dialogs/1'}>Sasha</NavLink></div>
            <div className={s.dialog}><NavLink to={'/dialogs/2'}>Meda</NavLink></div>
            <div className={s.dialog}><NavLink to={'/dialogs/3'}>Victor</NavLink></div>
            <div className={s.dialog}><NavLink to={'/dialogs/4'}>Alena</NavLink></div>
            <div className={s.dialog}><NavLink to={'/dialogs/5'}>Dasha</NavLink></div>
        </div>
        <div className={s.messageItem}>
            <div className={s.message}>hi</div>
            <div className={s.message}>How are</div>
            <div className={s.message}>do you want a car</div>
        </div>
    </div>
}
export default Dialogs