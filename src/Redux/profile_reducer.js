import {profileAPI, usersAPI} from "../api/api";

const UPDATER_NEW_POST = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";


let initialState = {
    posts: [
        {
            id: 1,
            greet: "hello",
            likeCounts: 15,

        },
        {
            id: 2,
            greet: "hi",
            likeCounts: 20,
        }
    ],
    textAreaValue: "some text",
    profile: null,
    status: "1"

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                greet: action.profileAddPost,
                likeCount: 0,
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts, newPost];
            // stateCopy.posts.push(newPost);
            stateCopy.textAreaValue = "";
            return stateCopy;
        }
        case SET_USERS_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case UPDATER_NEW_POST: {
            let stateCopy = {...state};
            stateCopy.textAreaValue = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addPost = (profileAddPost) => ({type: ADD_POST, profileAddPost});
export const updateNewPost = (text) => ({type: UPDATER_NEW_POST, newText: text});
export const setUserProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});


export const getProfileData = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
};
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }

};
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0){
                dispatch(setStatus(status))};
        })
    }
};


export default profileReducer;
