import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = (props) => {
// debugger;
//     let state = props.store.getState();
//
//     let addPosts = () => {
//         props.store.dispatch(addPostActionCreator());
//
//     };
//     let textAreaChanger = (text) => {
//         props.store.dispatch(updateNewPostActionCreator(text))
//     }
//     return <MyPosts updateNewPostActionCreator={textAreaChanger} addPost={addPosts}
//                     textAreaValue={state.profilePage.textAreaValue}/>;
// }
//     <div className={s.myPosts}>
//         <h3>My Posts</h3> <br/>
//         <textarea onChange={textAreaChanger} ref={newPostElement} value={props.textAreaValue}/><br/>
//         <button onClick={addPosts} type="submit">Опубликовать</button>
//     </div>);



let mapStateToProps = (state) => {
    return {
        textAreaValue: state.profilePage.textAreaValue,
        posts:state.profilePage.posts
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostActionCreator: (text) => {
            dispatch(updateNewPostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
};

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default PostContainer