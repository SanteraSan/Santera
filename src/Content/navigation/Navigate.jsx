import React from "react";
import navbar from "./nav.module.css"

const Navigation = () =>
    <div className={navbar.navigat}>
        <div className={`${navbar.item} ${navbar.prof}`}>Profile</div>
        <div className={`${navbar.message} ${navbar.item}`}>Message</div>
        <div className={`${navbar.news} ${navbar.item}`}>News</div>
        <div className={`${navbar.music} ${navbar.item}`}>Music</div>
        <div className={`${navbar.settings} ${navbar.item}`}>Settings</div>
    </div>;

    export default Navigation