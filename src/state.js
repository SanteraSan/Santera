import React from "react";

const UPDATER_NEW_POST = "UPDATE-NEW-POST-TEXT"
const ADD_POST = "ADD-POST";


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
    // addPost() {
    //     let newPost = {
    //         id: 3,
    //         greet: this._state.profilePage.textAreaValue,
    //         likeCount: 0,
    //     };
    //     this._state.profilePage.textAreaValue = "";
    //     this._state.profilePage.posts.push(newPost);
    //     this._callSubscriber(this._state)
    // },
    //
    // updaterTextAreaValue(newText) {
    //     this._state.profilePage.textAreaValue = newText;
    //     this._callSubscriber(this._state)
    // },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                greet: this._state.profilePage.textAreaValue,
                likeCount: 0,
            };
            this._state.profilePage.textAreaValue = "";
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state)
        } else if (action.type === UPDATER_NEW_POST) {
            this._state.profilePage.textAreaValue = action.newText;
            this._callSubscriber(this._state)}
        }
    };

export const addPostActionCreator = () =>({type: ADD_POST});
export const updateNewPostActionCreator = (text) =>({type: UPDATER_NEW_POST,newText: text});

window.store = store;

export default store

