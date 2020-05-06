import React from "react";
import s from "./Dialog.module.css"
import DialogsMessagesContainer from "./messages/DialogsMessagesContainer";
import DialogsItemsContainer from "./Dialog_Items/DialogsItemsContainer";


const Dialogs = () => {

    return(
    <div className={s.dialogs}>
        <DialogsItemsContainer/>
        <DialogsMessagesContainer/>
    </div>);
};

export default Dialogs