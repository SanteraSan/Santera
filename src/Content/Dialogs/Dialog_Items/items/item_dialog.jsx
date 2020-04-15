import {NavLink} from "react-router-dom";
import React from "react";
import s from "./item_dialog.module.css"

const Items = (props) =>
    <div className={s.item}>
        <NavLink className={s.imgLink} activeClassName={s.active} to={"/dialogs/" + props.link}>{props.img}</NavLink>
        <NavLink className={s.textLink} activeClassName={s.active} to={"/dialogs/" + props.link}>{props.name}</NavLink>
    </div>
;

export default Items
