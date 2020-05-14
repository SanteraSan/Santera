import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {letsAuth, logout, setAuthUserData} from "../../Redux/auth_reducer";

class HeaderContainer extends React.Component{


    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps=(state) =>({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})

export default connect(mapStateToProps,{logout,letsAuth, setAuthUserData}) (HeaderContainer)