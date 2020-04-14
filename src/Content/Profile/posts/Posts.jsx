import React from "react";
import Post from "./Post";
import MyPosts from "./MyPosts";


const Posts = (props) => {

    let postsElements = props.postsData.map(p => <Post message={p.greet} likeCounts={p.likeCounts}/>)
    return (<div className="Posts">
        <MyPosts/>
        {postsElements}
    </div>)
};
export default Posts