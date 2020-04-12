import React from "react";
import Post from "./Post";
import MyPosts from "./MyPosts";

let obj = {
    name:"John",
    age : 33,
    math : function (a,b) {
        return a + b;
    }
};

const Posts = () =>
    <div className="Posts">
        <MyPosts/>
        <Post message={"Hello"} like_counts = {15}/>
        <Post message={"Hi"} like_counts = {20}/>
    </div>;
    export default Posts