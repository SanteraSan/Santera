import {authAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};
const authReducer = (state = initialState, action) => {
    if (action.type === SET_USER_DATA) {
        return {
            ...state, ...action.payload
        };
    } else {
        return state;
    }
};

export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA, payload:
        {userId, login, email, isAuth}
});
export const letsAuth = () => {
    return (dispatch) => {
        usersAPI.authMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        })
    }
};
export const login = (email, password, rememberMe) =>
    (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(letsAuth())
            } else {
                let messageError = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("loginPage", {_error: messageError}))
            }
        })
    };

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }
};

export default authReducer
