import React from 'react';
import Dialogs from "./Dialogs";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


let AuthRedirectComponent = WithAuthRedirect(Dialogs)

export default AuthRedirectComponent

