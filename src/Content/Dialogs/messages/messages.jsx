import s from "../Dialog.module.css";
import React from "react";
import Message from "./mesage_item/message_item";


const Messages = (props) => {

    let newMessageElements = React.createRef();

    let addMessage = () => {
        let newMess = newMessageElements.current.value;
        alert(newMess)
    };

    let messages = props.state.map(m => <Message message={m.message}/>)

    return (
        <div>
            <div className={s.messages}>{messages}</div>
            <textarea ref={newMessageElements}></textarea><br/>
            <button onClick={addMessage}>Отправить</button>
        </div>)
};


export default Messages