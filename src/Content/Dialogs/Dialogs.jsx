import React from "react";
import s from "./Dialog.module.css"
import Dialogs_items from "./Dialog_Items/dialog_items";
import Messages from "./messages/messages";



const Dialogs = () =>
    <div className={s.dialogs}>
        <Dialogs_items/>
        <Messages/>
    </div>;

export default Dialogs