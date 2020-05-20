import React, {PureComponent} from "react";
import Profile from "./Profile";
import {getProfileData, getStatus, updateStatus} from "../../Redux/profile_reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {getProfile, getProfileStatus} from "../../Redux/profile_selector";
import {getAuthUserId} from "../../Redux/auth_selectors";

class ProfileContainer extends PureComponent {

    componentDidMount(){
        // debugger;
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizeUserId;
        }
        this.props.getProfileData(userId);
        this.props.getStatus(userId);
    }
    render()
    {
        console.log("render prof");
    return (
        <Profile {...this.props}/>
    )}
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
)(ProfileContainer)