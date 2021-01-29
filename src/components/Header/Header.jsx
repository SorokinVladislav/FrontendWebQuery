import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src="https://cdn.mos.cms.futurecdn.net/BVb3Wzn9orDR8mwVnhrSyd-1200-80.jpg"></img>

        <div className={s.loginBlock}>
            {props.isAuth ? props.login
            :<NavLink to={'/Login'}>Login</NavLink>}
        </div>
    </header>
};
export default Header;