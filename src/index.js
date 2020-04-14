import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let itemsData = [
    {id: 1, name: "Kirill", link: 1},
    {id: 2, name: "Sasha", link: 2},
    {id: 3, name: "Gulshatka", link: 3},
    {id: 4, name: "Yurasya", link: 4},
    {id: 5, name: "Svetlanka", link: 5},
    {id: 6, name: "Mishanya", link: 6},
    {id: 7, name: "Dimon", link: 7},
];
let postsData = [
    {id: 1, greet: "hello", likeCounts: "15"},
    {id: 2, greet: "hi", likeCounts: "20"}
];
let messageData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hello"},
    {id: 3, message: "Yo!!!!"},
];

ReactDOM.render(
    <React.StrictMode>
        <App itemsData={itemsData} postsData={postsData} messageData={messageData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
