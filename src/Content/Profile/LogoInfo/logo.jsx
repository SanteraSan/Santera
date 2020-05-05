import React from "react";
import Preloader from "../../Common/Preloader/Preloader";

const LogoProfile = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return(<img src={props.profile.photos.large} alt=""/>
)};
    export default LogoProfile