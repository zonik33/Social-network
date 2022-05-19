const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let defaultState = {
        messageData: [
            { id: 1, message: 'Привет ХИХХИ' },
            { id: 2, message: 'Привет Хфвфыв' },
            { id: 3, message: 'Привет ыЧЕЛ!' }
        ],
        dialogsData: [
            { id: 1, name: 'Рома' },
            { id: 2, name: 'Кирилл' }
        ],
        newTextMessage: 'Check'
}

const dialogsReducer = (state = defaultState, action) => {
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