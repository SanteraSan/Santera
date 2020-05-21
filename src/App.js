import React, {Component} from 'react';
import './App.css';
import Navigation from "./Content/navigation/Navigate"
import Content from "./Content/Content";
import {BrowserRouter} from "react-router-dom";
import HeaderContainer from "./Content/Header/HeaderComponent";
import {connect} from "react-redux";
import {setInitializeSuccess} from "./Redux/app_reducer";
import Preloader from "./Content/Common/Preloader/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.setInitializeSuccess();
    }
    render() {
        if (!this.props.initialize){
            return <Preloader/>
        }
        return (<BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className={'app_wrapper'}>
                <HeaderContainer/>
                <Navigation/>
                <Content/>
            </div>
        </BrowserRouter>);
    }
}

let mapStateToProps = (state) =>({
    initialize:state.app.initialize
});

export default connect(mapStateToProps,{setInitializeSuccess}) (App)
