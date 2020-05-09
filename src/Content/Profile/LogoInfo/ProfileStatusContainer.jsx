import React from "react";
import ProfileStatus from "./ProfileStatus";
import {connect} from "react-redux";
import {updateStatus} from "../../../Redux/profile_reducer";


class ProfileStatusContainer extends React.Component {

    render() {

        return <ProfileStatus {...this.props}/>


    }
}

let mapStateToProps = (state) => ({
    status: state.profilePage.status
})

export default connect(mapStateToProps, {updateStatus})(ProfileStatusContainer)