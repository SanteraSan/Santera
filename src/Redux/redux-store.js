import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog_reducer";
import profileReducer from "./profile_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    auth:authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;