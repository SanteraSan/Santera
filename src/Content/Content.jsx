import React from "react";
import style from "./Style.module.css"
import Dialogs from "./Dialogs/Dialogs"
import {Route} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";


const Content = () => {

        return (<div className={style.content}>
            <Route path={"/dialogs"} render={() => <Dialogs/>}/>
            <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
            <Route path={"/users"} render={() => <UsersContainer/>}/>
            <Route path={"/news"} render={() => <News/>}/>
            <Route path={"/music"} render={() => <Music/>}/>
            <Route path={"/settings"} render={() => <Settings/>}/>
        </div>)
    }

;

export default Content