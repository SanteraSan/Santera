import React from 'react';
import './App.css';
import Navigation from "./Content/navigation/Navigate"
import Content from "./Content/Content";
import {BrowserRouter} from "react-router-dom";
import HeaderContainer from "./Content/Header/HeaderComponent";


const App = () => {

    return (<BrowserRouter>
        <div className={'app_wrapper'}>
            <HeaderContainer/>
            <Navigation/>
            <Content/>
        </div>
    </BrowserRouter>);
};

export default App