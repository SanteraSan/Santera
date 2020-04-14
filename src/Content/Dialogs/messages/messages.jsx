import s from "../Dialog.module.css";
import React from "react";
import Message from "./mesage_item/message_item";


const Messages = () => {
    let messageData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello"},
        {id: 3, message: "Yo!!!!"},
    ];

    let messages = messageData.map(m => <Message message={m.message}/>)

    return (
        <div className={s.messages}>
            {messages}
        </div>)
};


export default Messages