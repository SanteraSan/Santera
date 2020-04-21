import React from "react";
import s from "./post.module.css"
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profile_reducer";

const MyPosts = (props) => {
    // debugger;

    let newPostElement = React.createRef();

    let addPosts = () =>{
        props.textAreaValue==="" ? alert("Не буду публиковать пустой пост") : props.dispatch(addPostActionCreator());

    };
    let textAreaChanger = () =>{
        let text = newPostElement.current.value;
        return (props.dispatch(updateNewPostActionCreator(text)));}
    ;


    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3> <br/>
            <textarea onChange={textAreaChanger} ref={newPostElement} value={props.textAreaValue}/><br/>
            <button onClick={addPosts} type="submit">Опубликовать</button>
        </div>);
}


export default MyPosts