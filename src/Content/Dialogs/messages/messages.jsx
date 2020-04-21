import s from "../Dialog.module.css";
import React from "react";
import Message from "./mesage_item/message_item";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../Redux/dialog_reducer";


const Messages = (props) => {

    let newMessageElements = React.createRef();

    // let addMessage = () => {
    //     let newMess = newMessageElements.current.value;
    //     alert(newMess)
    // };
    let addMessages = () => {
        props.textUpdater==="" ? alert("Не буду публиковать пустой пост") : props.dispatch(addMessageActionCreator());
    };

    let textAreaChanger = () => {
        let text = newMessageElements.current.value;
        return (props.dispatch(updateNewMessageActionCreator(text)));
    };

    let messages = props.state.map(m => <Message message={m.message}/>)

    return (
        <div>
            <div className={s.messages}>{messages}</div>
            <textarea onChange={textAreaChanger} ref={newMessageElements} value={props.textUpdater}/><br/>
            <button onClick={addMessages} type="submit">Отправить</button>
        </div>)
};


export default Messages