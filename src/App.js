import React from 'react';
import './App.css';
import Header from "./Content/Header/Header";
import Navigation from "./Content/navigation/Navigate"
import Content from "./Content/Content";
const App = () =>
    <div className={'app_wrapper'}>
        <Header/>
        <Navigation/>
        <Content/>
    </div>;

export default App