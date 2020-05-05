import React from "react";
import InfoProfile from "./info";
import LogoProfile from "./logo";

const LogoInfo = (props) => {
    return (
        <div className={"info_logo"}>
            <LogoProfile profile={props.profile}/>
            <InfoProfile/>
        </div>);
};
export default LogoInfo