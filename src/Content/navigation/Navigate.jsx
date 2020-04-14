import React from "react";
import n from "./nav.module.css"
import {NavLink} from "react-router-dom";

const Navigation = () =>
    <div className={n.navigat}>
        <div className={`${n.item} ${n.prof}`}><NavLink activeClassName={n.active} to="/profile">Profile</NavLink></div>
        <div className={`${n.message} ${n.item}`}><NavLink activeClassName={n.active} to="/dialogs">Message</NavLink></div>
        <div className={`${n.news} ${n.item}`}><NavLink activeClassName={n.active} to="/news">News</NavLink></div>
        <div className={`${n.music} ${n.item}`}><NavLink activeClassName={n.active} to="/music">Music</NavLink></div>
        <div className={`${n.settings} ${n.item}`}><NavLink activeClassName={n.active} to="/settings">Settings</NavLink></div>
    </div>;

    export default Navigation