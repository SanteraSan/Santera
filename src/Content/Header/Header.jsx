import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) =>
    <div className={s.header}>
        <NavLink to={"/home"}><img src="http://pngimg.com/uploads/american_football/american_football_PNG137.png" alt=""/></NavLink>
        Header
        <div className={s.login_block}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </div>;

export default Header