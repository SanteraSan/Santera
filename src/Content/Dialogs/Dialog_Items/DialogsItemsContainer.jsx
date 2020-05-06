import {connect} from "react-redux";
import Dialogs_items from "./dialog_items";

let mapStateToProps = (state) => {
    return {
        dialogs:state.dialogsPage.dialogs,
    }
};

const DialogsItemsContainer = connect(mapStateToProps)(Dialogs_items);

export default DialogsItemsContainer