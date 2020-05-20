import s from "../Dialog.module.css";
import React from "react";
import Message from "./mesage_item/message_item";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../Common/FormsControls/FormsControls";
import {maxLength, required} from "../../Utils/Validators/validators";


// const Messages = (props) => {
//     // debugger;
//     let newMessageElements = React.createRef();
//
//     // let addMessage = () => {
//     //     let newMess = newMessageElements.current.value;
//     //     alert(newMess)
//     // };
//     let addMessage = () => {
//         props.textAreaValue==="" ? alert("Не буду публиковать пустой пост") : props.addMessages();
//     };
//
//     let textAreaChanger = () => {
//         let text = newMessageElements.current.value;
//         return (props.updateNewMessageActionCreator(text));
//     };
//
//     let messages = props.messages.map(m => <Message message={m.message}/>);
//
// };

let maxLength50 = maxLength(50);

let AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field component={TextArea}
                       name="textareaName"
                       placeholder="Enter you message"
                       validate={[required, maxLength50]}/>
            </div>
            {/*<textarea onChange={textAreaChanger} ref={newMessageElements} value={props.textAreaValue}/><br/>*/}
            <button/*onClick={addMessage} type="submit"*/>Отправить</button>
        </form>)
};

AddMessageForm = reduxForm({form: 'dialogMessageForm'})(AddMessageForm);

const Messages = (props) => {

    let addNewMessage = (values) => {
        props.addMessages(values.textareaName);
    };
    let messages = props.messages.map(m => <Message key={m.id} message={m.message}/>);
    return <div>
        <div className={s.messages}>{messages}</div>
        <AddMessageForm onSubmit={addNewMessage}/>
    </div>

};
export default Messages