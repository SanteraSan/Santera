import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost, updateNewPost} from "../../../Redux/profile_reducer";

let mapStateToProps = (state) => {
    return {
        textAreaValue: state.profilePage.textAreaValue,
        posts:state.profilePage.posts
    }
};
// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewPostActionCreator: (text) => {
//             dispatch(updateNewPost(text))
//         },
//         addPost: () => {
//             dispatch(addPost());
//         }
//     }
// };


const PostContainer = connect(mapStateToProps, {addPost, updateNewPost})(MyPosts);

export default PostContainer