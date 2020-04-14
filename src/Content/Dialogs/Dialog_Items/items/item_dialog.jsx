import {NavLink} from "react-router-dom";
import React from "react";
import s from "./item_dialog.module.css"

const Items = (props) =>
    <div className={s.item}>
        <NavLink activeClassName={s.active} to={"/dialogs/" + props.link}>{props.name}</NavLink>
    </div>
;

export default Items
