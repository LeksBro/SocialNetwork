import React from "react";
import s from './Dialogs.module.css'
const Dialogs = () => {
    return <div className={s.dialogs}>
        <div className={s.dialogItem}>
            <div className={s.dialog}>Sasha</div>
            <div className={s.dialog}>Meda</div>
            <div className={s.dialog}>Victor</div>
            <div className={s.dialog}>Alena</div>
            <div className={s.dialog}>Dasha</div>
        </div>
        <div className={s.messageItem}>
            <div className={s.message}>hi</div>
            <div className={s.message}>How are</div>
            <div className={s.message}>do you want a car</div>
        </div>
    </div>
}
export default Dialogs