import React from "react";
import Post from "./Post";
import {Field, reduxForm} from "redux-form";
import s from "./post.module.css"
import {maxLength, required} from "../../Utils/Validators/validators";
import {TextArea} from "../../Common/FormsControls/FormsControls";


// const MyPosts = (props) => {
//     // debugger;
//
//     let postsElements = props.posts.map(p => <Post message={p.greet} likeCounts={p.likeCounts}/>);
//
//     let newPostElement = React.createRef();
//
//     let onAddPosts =() => {
//         props.textAreaValue === '' ? alert("Empty post") : props.addPost();
//     };
//
//     let textAreaChanger = () =>{
//         let text = newPostElement.current.value;
//         props.updateNewPost(text);}
//     ;
//     return (
//         <div className={s.myPosts}>
//             <h3>My Posts</h3> <br/>
//             <textarea onChange={textAreaChanger} ref={newPostElement} value={props.textAreaValue}/><br/>
//             <button onClick={onAddPosts} type="submit">Опубликовать</button>
//             {postsElements}
//         </div>);
// };

const maxLength15 = maxLength(15);

let NewPostProfileForm = React.memo((props) => {

    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={TextArea} name="profileAddPost" placeholder="Enter you message"
                       validate={[required, maxLength15]}
                />
            </div>
            <button>Отправить</button>
        </form>)

});


NewPostProfileForm = reduxForm({form: 'profileForm'})(NewPostProfileForm);


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.greet} likeCounts={p.likeCounts}/>);
    let onAddPosts = (value) => {
        props.addPost(value.profileAddPost);
    };

    return <div className={s.myPosts}>
        <h3>My Posts</h3>
        <NewPostProfileForm onSubmit={onAddPosts}/>
        {postsElements}
    </div>
};

export default MyPosts