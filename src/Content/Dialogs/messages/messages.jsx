import s from "../Dialog.module.css";
import React from "react";
import Message from "./mesage_item/message_item";


const Messages = () =>{
    let messageData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello"},
        {id: 3, message: "Yo!!!!"},
    ];
    return(<div className={s.messages}>
        <Message message={messageData[0].message}/>
        <Message message={messageData[1].message}/>
        <Message message={messageData[2].message}/>
    </div>);
}


export default Messages