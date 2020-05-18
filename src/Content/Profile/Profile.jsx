import React from "react";
import LogoInfo from "./LogoInfo/LogoInfo";
import style from "./profile.module.css"
import MyPostsContainer from "./posts/MyPostsContainer";

const Profile = (props) =>
    <div className={style.prof}>
        <img className={style.image}
             src="https://addons.cdn.mozilla.net/user-media/version-previews/full/2382/2382637.png?modified=1557783348"
             alt=""/>
        <div className={style.LogoInfoPosts}>
            <LogoInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    </div>
;
export default Profile