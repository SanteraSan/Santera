import React from "react";
import s from "./post.module.css"



const MyPosts = (props) => {



    let newPostElement = React.createRef();
    let addPosts = () =>{
        props.textAreaValue=="" ? alert("Не буду публиковать пустой пост") : props.addPost();
    };
    let textAreaChanger = () =>{
        return (props.updater(newPostElement.current.value));}
    ;


    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3> <br/>
            <textarea onChange={textAreaChanger} ref={newPostElement} value={props.textAreaValue}/> <br/>
            <button onClick={addPosts} type="submit">Опубликовать</button>
        </div>);
}


export default MyPosts