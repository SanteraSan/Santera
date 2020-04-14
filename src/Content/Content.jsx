import React from "react";
import Profile from "./Profile/Profile";
import style from "./Style.module.css"
import Dialogs from "./Dialogs/Dialogs"
import {Route} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";



const Content = (props) =>
    <div className={style.content}>
        <Route path={"/dialogs"} render={() => <Dialogs messageData={props.messageData} itemsData={props.itemsData}/>}/>
        <Route path={"/profile"} render={() => <Profile postsData={props.postsData}/>}/>
        <Route path={"/news"} render={() => <News/>}/>
        <Route path={"/music"} render={() => <Music/>}/>
        <Route path={"/settings"} render={() => <Settings/>}/>
    </div>

;

export default Content