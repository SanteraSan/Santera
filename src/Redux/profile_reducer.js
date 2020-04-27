
const UPDATER_NEW_POST = "UPDATE-NEW-POST-TEXT"
const ADD_POST = "ADD-POST";

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
    textAreaValue: "some text"
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
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.textAreaValue = "";
            return stateCopy;
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


export default profileReducer;
