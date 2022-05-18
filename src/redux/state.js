let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how are u?', like: '5'},
                {id: 2, message: 'Its my first post', like: '25'},
                {id: 3, message: 'HEY', like: '2'},
                {id: 4, message: 'HOW ARE U?', like: '111'}
            ],
            newPostText: 'artem lsad'
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
            newTextMessage: "dada ya"
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
        if (action.type === 'ADD-POST') {
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
        else if (action.type === 'ADD-MESSAGE') {
            let newPost = {
                id: 4,
                message: this._state.messagePage.newTextMessage,
            };
            this._state.messagePage.messageData.push(newPost);
            this._state.messagePage.newTextMessage = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagePage.newTextMessage = action.newText;
            this._callSubscriber(this._state);
        }
    },
}
window.store = store;
export default store;