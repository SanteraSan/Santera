import React, {useEffect} from 'react';
import Profile from "./Profile";
import {getProfile, getProfileStatus} from "../../Redux/profile_selector";
import {getAuthUserId} from "../../Redux/auth_selectors";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfileData, getStatus, updateStatus} from "../../Redux/profile_reducer";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";

function ProfileContainerWithHook(props) {

    console.log("render");

    let userServ = props.match.params.userId;
    let userAuth = props.authorizeUserId;


    // let func = () =>{
    //     setUserId(props.match.params.userId) || setUserId(props.authorizeUserId);
    //     props.getProfileData(userId);
    //     props.getStatus(userId)
    // };

    useEffect(() =>{
        let userId = userServ;
        if (!userId){
            userId = userAuth;
        }
        props.getProfileData(userId);
        props.getStatus(userId);
    },[props.match.params.userId, props.authorizeUserId]);

    // let userId = this.props.match.params.userId;
    // if (!userId) {
    //     userId = this.props.authorizeUserId;
    // }
    // this.props.getProfileData(userId);
    // this.props.getStatus(userId);


    return (
        <div>
            <Profile {...props}/>
        </div>
    );
}


let mapStateToProps = (state) => {
    console.log("mSTP");
    return({
        profile: getProfile(state),
        status: getProfileStatus(state),
        authorizeUserId:getAuthUserId(state)
    })};


export default compose(
    connect(mapStateToProps, {getStatus, updateStatus,getProfileData}),
    withRouter,
    WithAuthRedirect
)(ProfileContainerWithHook)