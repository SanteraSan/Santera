import {usersAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth:false
};
const authReducer = (state = initialState, action) => {
    if (action.type === SET_USER_DATA) {
        return {
            ...state, ...action.data, isAuth: true
        };
    } else {
        return state;
    }
};

export const setAuthUserData = (userId, login, email) => ({type: SET_USER_DATA, data:{userId, login, email}});

export const letsAuth = ()=>{
    return (dispatch) => {
        usersAPI.authMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, login, email));
            }
        })
    }
};

export default authReducer
