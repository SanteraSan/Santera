import React from "react";
import Profile from "./Profile";
import {getProfileData, getStatus, updateStatus} from "../../Redux/profile_reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        // debugger;
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizeUserId;
        }
        this.props.getProfileData(userId);
        this.props.getStatus(userId);
    };



    render() {
        // debugger;
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizeUserId:state.auth.userId
});

export default compose(
    connect(mapStateToProps, {getStatus, updateStatus,getProfileData}),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)