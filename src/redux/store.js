// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
//
//
// let store = {
//     _state: {
//         profilePage: {
//             postData: [
//                 {id: 1, message: 'Hi, how are u?', like: '5'},
//                 {id: 2, message: 'Its my first post', like: '25'},
//                 {id: 3, message: 'HEY', like: '2'},
//                 {id: 4, message: 'HOW ARE U?', like: '111'}
//             ],
//             newPostText: 'Check'
//         },
//         messagePage: {
//             messageData: [
//                 { id: 1, message: 'Привет ХИХХИ' },
//                 { id: 2, message: 'Привет Хфвфыв' },
//                 { id: 3, message: 'Привет ыЧЕЛ!' }
//             ],
//             dialogsData: [
//                 { id: 1, name: 'Рома' },
//                 { id: 2, name: 'Кирилл' }
//             ],
//             newTextMessage: 'Check'
//         },
//         sidebar: {
//             nameFriends: [
//                 { id: 1, name: 'Рома' },
//                 { id: 2, name: 'Кирилл' }
//             ],
//         },
//     },
//     _callSubscriber() {
//         console.log('Ok check this sou');
//     },
//     getState(){
//         return this._state;
//     },
//     subscribe (observer) {
//         this._callSubscriber = observer; // Наблюдатель - патерн observer
//     },
//         dispatch(action){
//             this._state.profilePage = profileReducer(this._state.profilePage, action);
//             this._state.messagePage = dialogsReducer(this._state.messagePage, action);
//             this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//             this._callSubscriber(this._state);
//     },
// }
//
// window.store = store;
// export default store;