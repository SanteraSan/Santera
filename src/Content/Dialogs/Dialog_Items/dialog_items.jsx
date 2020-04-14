import React from "react";
import Item from "./items/item_dialog";
import s from "./dialog_items.module.css"


const Dialogs_items = () => <div className={s.items}>
        <Item name={"Kirill"} link={"/dialogs/1"} />
        <Item name={"Sasha"} link={"/dialogs/2"} />
        <Item name={"Gulshatka"} link={"/dialogs/3"} />
        <Item name={"Yurasya"} link={"/dialogs/4"} />
        <Item name={"Svetlanka"} link={"/dialogs/5"} />
        <Item name={"Mishanya"} link={"/dialogs/6"} />
        <Item name={"Dimon"} link={"/dialogs/7"} />
    </div>
;

export default Dialogs_items