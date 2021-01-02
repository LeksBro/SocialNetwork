import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
type DialogPropsType = {
    id: number
    name: string
}
const Dialog = (props: DialogPropsType) => {
    return <div className={s.dialog}><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
}
export default Dialog
