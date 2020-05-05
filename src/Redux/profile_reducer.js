
const UPDATER_NEW_POST = "UPDATE-NEW-POST-TEXT"
const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";

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
    profile:null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                greet: state.textAreaValue,
                likeCount: 0,
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts, newPost]
            // stateCopy.posts.push(newPost);
            stateCopy.textAreaValue = "";
            return stateCopy;
        }
        case SET_USERS_PROFILE:{
            return{...state, profile:action.profile}
        }
        case UPDATER_NEW_POST: {
            let stateCopy = {...state};
            stateCopy.textAreaValue = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATER_NEW_POST, newText: text});
export const setUserProfile = (profile) => ({type: SET_USERS_PROFILE, profile});


export default profileReducer;
