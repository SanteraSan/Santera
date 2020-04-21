const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATER_NEW_MESSAGE = "UPDATE-NEW-MESSAGE-TEXT"

const dialogReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.textAreaValue
            };
            state.textAreaValue = "";
            state.messages.push(newMessage);
            break;
        case UPDATER_NEW_MESSAGE:
            state.textAreaValue = action.newMessage;
            break;
    }
    return state;
};
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (text) =>({type: UPDATER_NEW_MESSAGE, newMessage: text});


export default dialogReducer;