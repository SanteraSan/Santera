import s from "../../Dialog.module.css";
import React from "react";

const Message = (props) =>{

    return(<div>
        <div className={`${s.message} ${s.home}`}>{props.message}</div>
        <div className={`${s.message} ${s.guest}`}>{props.message}</div>
    </div> );

}
export default Message