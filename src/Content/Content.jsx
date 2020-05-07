import React from "react";
import style from "./Style.module.css"
import {Route} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import Login from "./Login/login";
import DialogsContainer from "./Dialogs/DialogsContainer";


const Content = () => {

        return (<div className={style.content}>
            <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
            <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
            <Route path={"/users"} render={() => <UsersContainer/>}/>
            <Route path={"/news"} render={() => <News/>}/>
            <Route path={"/music"} render={() => <Music/>}/>
            <Route path={"/login"} render={() => <Login/>}/>
            <Route path={"/settings"} render={() => <Settings/>}/>
        </div>)
    }

;

export default Content