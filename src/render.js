import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./state";
import {updaterTextAreaValue} from "./state";

export let pups = (state) =>{ReactDOM.render(
    <React.StrictMode>
        <App state={state} addPost={addPost} updater = {updaterTextAreaValue}/>
    </React.StrictMode>,
    document.getElementById('root')
);}
