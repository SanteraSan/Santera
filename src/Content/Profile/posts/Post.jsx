import React from "react";
import style from "../posts/post.module.css"



const Post = (props) => {

    return (<div className={style.post}>
        <img src="http://pngimg.com/uploads/american_football/american_football_PNG137.png" alt=""/>
        {props.message}<br/>
        <span>like</span>
        {props.likeCounts}
    </div>);
};
export default Post