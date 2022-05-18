let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let ADD_POST = 'ADD-POST';

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how are u?', like: '5'},
                {id: 2, message: 'Its my first post', like: '25'},
                {id: 3, message: 'HEY', like: '2'},
                {id: 4, message: 'HOW ARE U?', like: '111'}
            ],
            newPostText: 'Check'
        },
        messagePage: {
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
        },
        sidebar: {
            nameFriends: [
                { id: 1, name: 'Рома' },
                { id: 2, name: 'Кирилл' }
            ],
        },
    },
    _callSubscriber() {
        console.log('Ok check this sou');
    },
    getState(){
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer; // Наблюдатель - патерн observer
    },
        dispatch(action){
        if (action.type === ADD_POST) {
            debugger;
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        }
        else if (action.type === ADD_MESSAGE) {
            let newPost = {
                id: 4,
                message: this._state.messagePage.newTextMessage,
            };
            this._state.messagePage.messageData.push(newPost);
            this._state.messagePage.newTextMessage = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagePage.newTextMessage = action.newText;
            this._callSubscriber(this._state);
        }
    },
}
    export const addPostActionCreator = () =>({type: ADD_POST})
/*
{
    return{
        type: ADD_POST
}
}
* */
    export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
    export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
    export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

window.store = store;
export default store;