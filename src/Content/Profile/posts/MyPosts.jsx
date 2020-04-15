import React from "react";
import s from "./post.module.css"

const MyPosts = () => {

    let newPostElement = React.createRef();

    let addPost = () =>{
        let text = newPostElement.current.value;
        alert(text);
    }
    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3> <br/>
            <textarea ref={newPostElement}></textarea> <br/>
            <button onClick={addPost} type="submit">Опубликовать</button>
        </div>);
}


export default MyPosts