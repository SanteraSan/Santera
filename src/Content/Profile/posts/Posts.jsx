import React from "react";
import Post from "./Post";
import MyPosts from "./MyPosts";

let postsData = [
    {id:1, greet:"hello", likeCounts:"15"},
    {id:2, greet:"hi", likeCounts:"20"}
];

let postsElements = postsData.map(p => <Post message={p.greet} likeCounts={p.likeCounts}/> )

const Posts = () =>{
    return(<div className="Posts">
        <MyPosts/>
        {postsElements}
    </div>)};
    export default Posts