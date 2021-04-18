import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    logoutThunkCreator: () => void

}
const Header = (props: HeaderPropsType) => {
    return (

            <header className={s.Header}>
                <img src="https://w-dog.ru/wallpapers/5/9/288879431917547/polyarnaya-sova-belaya-sova-ptica.jpg"
                     alt=""/>
                     <div className={s.loginBlock}>
                         {props.isAuth
                             ? <div>{props.login} - <button onClick={props.logoutThunkCreator}>Log out</button></div>
                             : <NavLink to={'/login'} >Login</NavLink>}
                     </div>
            </header>

    )
}
export default Header