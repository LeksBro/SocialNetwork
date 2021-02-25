import React, {ReactNode} from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {DataACType} from "../Redux/auth-Reducer";
type HeaderPropsType = {
    login: string | null
    isAuth: boolean

}
const Header = (props: HeaderPropsType) => {
    return (

            <header className={s.Header}>
                <img src="https://w-dog.ru/wallpapers/5/9/288879431917547/polyarnaya-sova-belaya-sova-ptica.jpg"
                     alt="image"/>
                     <div className={s.loginBlock}>
                         {props.isAuth ? props.login: <NavLink to={'/login'} >Login</NavLink>}
                         
                     </div>
            </header>

    )
}
export default Header