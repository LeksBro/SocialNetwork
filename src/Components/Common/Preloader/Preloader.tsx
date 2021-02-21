import React from "react";
import s from "./Preloader.module.css";
const Preloader = () => {
    return <>
         <div className={s['lds-roller']}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </>
}
export default Preloader