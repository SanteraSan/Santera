import React from "react";
import s from "./Dialog.module.css"
import DialogsMessagesContainer from "./messages/DialogsMessagesContainer";
import DialogsItemsContainer from "./Dialog_Items/DialogsItemsContainer";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {
    if (props.isAuth===false) return <Redirect to={"/login"} />;
    return(
    <div className={s.dialogs}>
        <DialogsItemsContainer/>
        <DialogsMessagesContainer/>
    </div>);
};

export default Dialogs