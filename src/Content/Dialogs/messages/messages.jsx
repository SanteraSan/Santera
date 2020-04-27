import s from "../Dialog.module.css";
import React from "react";
import Message from "./mesage_item/message_item";


const Messages = (props) => {
    // debugger;
    let newMessageElements = React.createRef();

    // let addMessage = () => {
    //     let newMess = newMessageElements.current.value;
    //     alert(newMess)
    // };
    let addMessage = () => {
        props.textAreaValue==="" ? alert("Не буду публиковать пустой пост") : props.addMessages();
    };

    let textAreaChanger = () => {
        let text = newMessageElements.current.value;
        return (props.updateNewMessageActionCreator(text));
    };

    let messages = props.messages.map(m => <Message message={m.message}/>)

    return (
        <div>
            <div className={s.messages}>{messages}</div>
            <textarea onChange={textAreaChanger} ref={newMessageElements} value={props.textAreaValue}/><br/>
            <button onClick={addMessage} type="submit">Отправить</button>
        </div>)
};


export default Messages