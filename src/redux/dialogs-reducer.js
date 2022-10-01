const ADD_MESSAGE = 'ADD-MESSAGE';

let defaultState = {
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Howau?'}
    ],
    dialogsData: [
        {id: 1, name: 'Рома'},
        {id: 2, name: 'Кирилл'}
    ],
}

const dialogsReducer = (state = defaultState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messageData: [...state.messageData, {id: 4, message: action.newTextMessage,}],
                newTextMessage: '',


            }

        default:
            return state;
    }
}
export const addMessageActionCreator = (newTextMessage) => ({type: ADD_MESSAGE, newTextMessage})

export default dialogsReducer;