import React from "react";
import Profile from "./Profile/Profile";
import style from "./Style.module.css"
import Dialogs from "./Dialogs/Dialogs"
import {Route} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";



const Content = (props) => {

        return(  <div className={style.content}>
        <Route path={"/dialogs"} render={() => <Dialogs/>}/>
        <Route path={"/profile"} render={() => <Profile/>}/>
        <Route path={"/news"} render={() => <News/>}/>
        <Route path={"/music"} render={() => <Music/>}/>
        <Route path={"/settings"} render={() => <Settings/>}/>
    </div>)}

;

export default Content