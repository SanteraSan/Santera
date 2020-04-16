import React from "react";
import Post from "./Post";
import MyPosts from "./MyPosts";


const Posts = (props) => {

    let postsElements = props.state.map(p => <Post message={p.greet} likeCounts={p.likeCounts}/>)
    return (<div className="Posts">
        <MyPosts addPost={props.addPost}/>
        {postsElements}
    </div>)
};
export default Posts