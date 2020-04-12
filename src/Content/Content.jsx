import React from "react";
// import Profile from "./Profile/Profile";
import style from "./Style.module.css"
import Dialogs from "./Dialogs/Dialogs"

const Content = () =>
    <div className={style.content}>
        {/*<Profile/>*/}
        <Dialogs/>
    </div>
;
export default Content