import React from "react";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATER_NEW_MESSAGE = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    messages: [

        {id: 1, message: "Hi"},
        {
            id: 2,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque blanditiis distinctio dolorum eaque,\n" +
                "                et expedita fuga hic in ipsa laboriosam minus nam quam quos rerum similique, tempore tenetur voluptatem?"
        },
        {id: 3, message: "Yo!!!!"},
    ],
    // textAreaValue: "some text",
    dialogs: [
        {
            id: 1,
            name: "Kirill",
            link: 1,
            img: <img src="http://pngimg.com/uploads/american_football/american_football_PNG137.png" alt=""/>,
        },
        {
            id: 2,
            name: "Sasha",
            link: 2,
            img: <img src="http://pngimg.com/uploads/american_football/american_football_PNG137.png" alt=""/>
        },
        {
            id: 3,
            name: "Gulshatka",
            link: 3,
            img: <img src="http://pngimg.com/uploads/american_football/american_football_PNG137.png" alt=""/>
        },
        {
            id: 4,
            name: "Yurasya",
            link: 4,
            img: <img src="http://pngimg.com/uploads/american_football/american_football_PNG137.png" alt=""/>
        },
        {
            id: 5,
            name: "Svetlanka",
            link: 5,
            img: <img src="http://pngimg.com/uploads/american_football/american_football_PNG137.png" alt=""/>
        },
        {
            id: 6,
            name: "Mishanya",
            link: 6,
            img: <img src="http://pngimg.com/uploads/american_football/american_football_PNG137.png" alt=""/>
        },
        {
            id: 7,
            name: "Dimon",
            link: 7,
            img: <img src="http://pngimg.com/uploads/american_football/american_football_PNG137.png" alt=""/>
        },
    ]
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.textareaName
            };
            let stateCopy = {...state};
            // stateCopy.textAreaValue = "";
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            return stateCopy;
        // case UPDATER_NEW_MESSAGE:{
            // let stateCopy = {...state};
            // stateCopy.textAreaValue = action.newMessage;
            // return stateCopy;}
    default:return state;
    }
};

export const addMessageActionCreator = (textareaName) => ({type: ADD_MESSAGE,textareaName});
export const updateNewMessageActionCreator = (text) =>({type: UPDATER_NEW_MESSAGE, newMessage: text});


export default dialogReducer;