import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {updateStatus} from "../../../Redux/profile_reducer";
import ProfileStatusWithHook from "./ProfileStatusWithHook";


class ProfileStatusContainer extends PureComponent {


    render() {
        return <ProfileStatusWithHook {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    status: state.profilePage.status
});

export default connect(mapStateToProps, {updateStatus})(ProfileStatusContainer)