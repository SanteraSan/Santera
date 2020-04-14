import React from "react";
import Item from "./items/item_dialog";
import s from "./dialog_items.module.css"


const Dialogs_items = (props) => {
        let itemsData = [
            {id: 1, name: "Kirill", link: 1},
            {id: 2, name: "Sasha", link: 2},
            {id: 3, name: "Gulshatka", link: 3},
            {id: 4, name: "Yurasya", link: 4},
            {id: 5, name: "Svetlanka", link: 5},
            {id: 6, name: "Mishanya", link: 6},
            {id: 7, name: "Dimon", link: 7},
        ];
        return (<div className={s.items}>
            <Item data={itemsData[0]}/>
            <Item data={itemsData[1]}/>
            <Item data={itemsData[2]}/>
            <Item data={itemsData[3]}/>
            <Item data={itemsData[4]}/>
            <Item data={itemsData[5]}/>
            <Item data={itemsData[6]}/>
        </div>)
    }
;

export default Dialogs_items