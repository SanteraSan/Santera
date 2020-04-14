import React from "react";
import Post from "./Post";
import MyPosts from "./MyPosts";



const Posts = () =>{
    let postsData = [
        {id:1, greet:"hello", likeCounts:"15"},
        {id:2, greet:"hi", likeCounts:"20"}
    ];
    return(<div className="Posts">
        <MyPosts/>
        <Post message={postsData[0]}/>
        <Post message={postsData[1]}/>
    </div>)};
    export default Posts