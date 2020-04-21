import React from "react";
import profileReducer from "./profile_reducer";
import dialogReducer from "./dialog_reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    greet: "hello",
                    likeCounts: 15,

                },
                {
                    id: 2,
                    greet: "hi",
                    likeCounts: 20,
                }
            ],
            textAreaValue: "some text"
        },
        dialogsPage: {

            messages: [

                {id: 1, message: "Hi"},
                {
                    id: 2,
                    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque blanditiis distinctio dolorum eaque,\n" +
                        "                et expedita fuga hic in ipsa laboriosam minus nam quam quos rerum similique, tempore tenetur voluptatem?"
                },
                {id: 3, message: "Yo!!!!"},
            ],
            textAreaValue: "some text",
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
        }
    },
    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state)
    }
};


window.store = store;

export default store

