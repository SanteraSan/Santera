import React from "react";
import styleHeader from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = () =>
    <div className={styleHeader.header}>
        <NavLink to={"/home"}><img src="http://pngimg.com/uploads/american_football/american_football_PNG137.png" alt=""/></NavLink>
        Header
    </div>;

export default Header