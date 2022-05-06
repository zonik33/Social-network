import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are u?', like: '5'},
            {id: 2, message: 'Its my first post', like: '25'},
            {id: 3, message: 'HEY', like: '2'},
            {id: 4, message: 'HOW ARE U?', like: '111'}
        ]

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
    },
    sidebar: {
        nameFriends: [
            { id: 1, name: 'Рома' },
            { id: 2, name: 'Кирилл' }
        ],
    },
}
export let addMessage = (postMessage) => {
    debugger;
    let newPost = {
        id: 4,
        message: postMessage
    };
    state.messagePage.messageData.push(newPost);
    rerenderEntireTree(state);
}
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        like:   0
    };

    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
}
export default state;