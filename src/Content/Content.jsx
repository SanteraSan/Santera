import React from "react";
import Profile from "./Profile/Profile";
import style from "./Style.module.css"
import Dialogs from "./Dialogs/Dialogs"
import {Route} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const Content = () =>
    <div className={style.content}>
        <Route path={"/dialogs"} component={Dialogs}/>
        <Route path={"/profile"} component={Profile}/>
        <Route path={"/news"} component={News}/>
        <Route path={"/music"} component={Music}/>
        <Route path={"/settings"} component={Settings}/>
    </div>

;

export default Content