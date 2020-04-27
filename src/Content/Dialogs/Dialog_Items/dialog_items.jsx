import React from "react";
import Item from "./items/item_dialog";
import s from "./dialog_items.module.css"



const Dialogs_items = (props) => {
    let items = props.dialogs.map(i => <Item id={i.id} name={i.name} link={i.link} img={i.img}/>)

    return (
        <div className={s.items}>
            {items}
        </div>)
};

export default Dialogs_items
