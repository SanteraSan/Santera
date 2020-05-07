import React from "react";
import s from "./post.module.css"
import Post from "./Post";


const MyPosts = (props) => {
    // debugger;

    let postsElements = props.posts.map(p => <Post message={p.greet} likeCounts={p.likeCounts}/>);

    let newPostElement = React.createRef();

    let onAddPosts =() => {
        props.textAreaValue === '' ? alert("Empty post") : props.addPost();
    };

    let textAreaChanger = () =>{
        let text = newPostElement.current.value;
        props.updateNewPost(text);}
    ;
    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3> <br/>
            <textarea onChange={textAreaChanger} ref={newPostElement} value={props.textAreaValue}/><br/>
            <button onClick={onAddPosts} type="submit">Опубликовать</button>
            {postsElements}
        </div>);
};


export default MyPosts