import React from 'react';
import './App.css';
import Header from "./Content/Header/Header";
import Navigation from "./Content/navigation/Navigate"
import Content from "./Content/Content";
import {BrowserRouter} from "react-router-dom";


const App = () => {

    return (<BrowserRouter>
        <div className={'app_wrapper'}>
            <Header/>
            <Navigation/>
            <Content/>
        </div>
    </BrowserRouter>);
};

export default App