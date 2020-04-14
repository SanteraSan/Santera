import s from "../../Dialog.module.css";
import React from "react";

const Message = (props) =>
    <div className={s.message}>{props.message}</div>
;
export default Message