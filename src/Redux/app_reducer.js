import {letsAuth} from "./auth_reducer";

const INITIALIZING_SUCCESS = "INITIALIZING_SUCCESS";

let initialState = {
    initialize: false
};
const appReducer = (state = initialState, action) => {
    if (action.type === INITIALIZING_SUCCESS) {
        return {
            ...state, initialize: true
        };
    } else {
        return state;
    }
};

export const initializeSuccess = () => ({type: INITIALIZING_SUCCESS});

export const setInitializeSuccess = () => (dispatch) => {
    let promise = dispatch(letsAuth());

    Promise.all([promise]).then(() => {
        dispatch(initializeSuccess())
    });
};


export default appReducer
