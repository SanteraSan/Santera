import React from "react";
import InfoProfile from "./info";
import LogoProfile from "./logo";
import s from "./info_logo.module.css"

const LogoInfo = () =>
    <div className={s.info_logo}>
        <LogoProfile/>
        <InfoProfile/>
    </div>;
    export default LogoInfo