import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./state";

export let pups = (state) =>{ReactDOM.render(
    <React.StrictMode>
        <App state={state} addPost={addPost}/>
    </React.StrictMode>,
    document.getElementById('root')
);}
