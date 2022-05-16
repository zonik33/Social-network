let rerenderEntireTree = () => {
    console.log('Ok check this sou');
}
let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are u?', like: '5'},
            {id: 2, message: 'Its my first post', like: '25'},
            {id: 3, message: 'HEY', like: '2'},
            {id: 4, message: 'HOW ARE U?', like: '111'}
        ],
        newPostText: "artem lsad"


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
}
window.state = state;
export const addMessage = () => {
    let newPost = {
        id: 4,
        message: state.messagePage.newTextMessage,
    };
    state.messagePage.messageData.push(newPost);
    state.messagePage.newTextMessage = '';
    rerenderEntireTree(state);
}
export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        like:   0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export const updateNewMessageText = (newText) => {
    state.messagePage.newTextMessage = newText;
    rerenderEntireTree(state);
}
export const subcribe = (observer) => {
    rerenderEntireTree = observer; // Наблюдатель - патерн observer
}
export default state;