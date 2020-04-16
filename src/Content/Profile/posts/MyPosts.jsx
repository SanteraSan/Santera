import React from "react";
import s from "./post.module.css"



const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPosts = () =>{
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3> <br/>
            <textarea ref={newPostElement}></textarea> <br/>
            <button onClick={addPosts} type="submit">Опубликовать</button>
        </div>);
}


export default MyPosts