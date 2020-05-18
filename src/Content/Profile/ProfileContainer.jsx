import React, {PureComponent} from "react";
import Profile from "./Profile";
import {getProfileData, getStatus, updateStatus} from "../../Redux/profile_reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends PureComponent {



    componentDidMount() {
        // debugger;
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizeUserId;
        }
        this.props.getProfileData(userId);
        this.props.getStatus(userId);
    };

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return nextProps !== this.props || nextState !== this.state;
    // }




    render() {
        // debugger;
        console.log("Render profile");
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    console.log("mSTP");
    return({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizeUserId:state.auth.userId
})};

export default compose(
    connect(mapStateToProps, {getStatus, updateStatus,getProfileData}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)