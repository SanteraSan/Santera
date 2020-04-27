import s from "./../nav.module.css"
import {NavLink} from "react-router-dom";
import React from "react";
// import Avatar from "./avatar";

const AvaFriend = (props) => {
    // let Avas = props.state.map(i => <Avatar id={i.id} name={i.name} link={i.link} img={i.img}/>)
    return (
        <div className={s.avatar}>
            {/*{Avas}*/}
            <NavLink className={s.imgLink} to={"/dialogs/" + props.dialogs[0].link}>{props.dialogs[0].img}</NavLink>
            <NavLink className={s.imgLink} to={"/dialogs/" + props.dialogs[1].link}>{props.dialogs[1].img}</NavLink>
            <NavLink className={s.imgLink} to={"/dialogs/" + props.dialogs[2].link}>{props.dialogs[2].img}</NavLink>
        </div>)
};
export default AvaFriend