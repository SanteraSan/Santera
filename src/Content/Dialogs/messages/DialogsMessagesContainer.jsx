import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../Redux/dialog_reducer";
import {connect} from "react-redux";
import Messages from "./messages";

//
// const Messages = (props) => {
//     // debugger;
//
//     // let addMessage = () => {
//     //     let newMess = newMessageElements.current.value;
//     //     alert(newMess)
//     // };
//     let addMessages = () => {
//         props.textAreaValue==="" ? alert("Не буду публиковать пустой пост") : props.dispatch(addMessageActionCreator());
//     };
//
//     let textAreaChanger = () => {
//         let text = newMessageElements.current.value;
//         return (props.dispatch(updateNewMessageActionCreator(text)));
//     };
//
//     let messages = props.state.dialogsPage.messages.map(m => <Message message={m.message}/>)
//
//     return (
//         <div>
//             <div className={s.messages}>{messages}</div>
//             <textarea onChange={textAreaChanger} ref={newMessageElements} value={props.textUpdater.dialogsPage.textAreaValue}/><br/>
//             <button onClick={addMessages} type="submit">Отправить</button>
//         </div>)
// };
//


let mapStateToProps = (state) => {
    return {
        textAreaValue: state.dialogsPage.textAreaValue,
        messages:state.dialogsPage.messages
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageActionCreator: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        },
        addMessages: () => {
            dispatch(addMessageActionCreator());
        }
    }
};

const DialogsMessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages)

export default DialogsMessagesContainer