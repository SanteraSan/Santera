import React from "react";
import s from "./Dialog.module.css"
import Dialogs_items from "./Dialog_Items/dialog_items";

const Dialogs = () =>
    <div className={s.dialogs}>
        <Dialogs_items/>
        <div className={s.messages}>
            <div className={s.message}>Hello!</div>
            <div className={s.message}>Hi!</div>
            <div className={s.message}>Yo!</div>
        </div>
    </div>;

export default Dialogs