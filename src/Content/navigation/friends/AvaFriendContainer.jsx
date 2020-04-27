import React from "react";
import {connect} from "react-redux";
import AvaFriend from "./friends";




let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,

    }
};

// const AvaFriendContainer = () => {
//     return (<div>
//         {<AvaFriend state={props.state.dialogsPage.dialogs[0]} />}
//         {<AvaFriend state={props.state.dialogsPage.dialogs[1]}/>}
//         {<AvaFriend state={props.state.dialogsPage.dialogs[2]}/>}
//     </div>)
// };
const AvaFriendContainer = connect(mapStateToProps)(AvaFriend);

export default AvaFriendContainer