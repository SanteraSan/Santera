import s from "../Dialog.module.css";
import React from "react";
import Message from "./mesage_item/message_item";


const Messages = (props) => {

    let messages = props.messageData.map(m => <Message message={m.message}/>)

    return (
        <div className={s.messages}>
            {messages}
        </div>)
};


export default Messages