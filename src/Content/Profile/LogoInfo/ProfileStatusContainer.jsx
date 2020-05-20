import React from "react";
import {connect} from "react-redux";
import {updateStatus} from "../../../Redux/profile_reducer";
import ProfileStatusWithHook from "./ProfileStatusWithHook";


function ProfileStatusContainer(props) {
    return <ProfileStatusWithHook {...props}/>}

let mapStateToProps = (state) => ({
    status: state.profilePage.status
});

export default connect(mapStateToProps, {updateStatus})(ProfileStatusContainer)