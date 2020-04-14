import React from "react";
import s from "./post.module.css"
const MyPosts = () =>

    <div className={s.myPosts}>
        <h3>My Posts</h3> <br/>
        <textarea></textarea> <br/>
        <button type="submit">Опубликовать</button>
    </div>;

export default MyPosts