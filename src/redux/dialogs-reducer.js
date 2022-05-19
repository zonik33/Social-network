const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newPost = {
                id: 4,
                message: state.newTextMessage,
            };
            state.messageData.push(newPost);
            state.newTextMessage = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newTextMessage = action.newText;
            return state;
        default:
            return state;
    }
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
export default dialogsReducer;