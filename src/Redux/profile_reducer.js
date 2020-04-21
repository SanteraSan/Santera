const UPDATER_NEW_POST = "UPDATE-NEW-POST-TEXT"
const ADD_POST = "ADD-POST";

const profileReducer =(state, action) =>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                greet: state.textAreaValue,
                likeCount: 0,
            };
            state.textAreaValue = "";
            state.posts.push(newPost);
            break;
        case UPDATER_NEW_POST:
            state.textAreaValue = action.newText;
            break;
    }
    return state;
};

export const addPostActionCreator = () =>({type: ADD_POST});
export const updateNewPostActionCreator = (text) =>({type: UPDATER_NEW_POST,newText: text});


export default profileReducer;
