
import React from "react";
import style from './Preloader.module.css'
const Preloader = () => {
    return<>
    <div className={style.preloader}>
        <div className={style.preloader__row}>z
            <div className={style.preloader__item}/>
            <div className={style.preloader__item}/>
        </div>
    </div>
        </>
}
export default Preloader