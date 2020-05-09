import React from "react";
import InfoProfile from "./info";
import LogoProfile from "./logo";
import ProfileStatusContainer from "./ProfileStatusContainer";


const LogoInfo = (props) => {

    return (
        <div className={"info_logo"}>
            <LogoProfile profile={props.profile}/><br/>
            <ProfileStatusContainer/>
            <InfoProfile/>
        </div>);
};

export default LogoInfo