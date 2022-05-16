import store from './redux/state';
import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewMessageText, updateNewPostText} from "./redux/state";
import {addMessage} from "./redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(

        <React.StrictMode>
            <App state = {state}
                 addPost = {store.addPost.bind(store)}
                 updateNewMessageText = {store.updateNewMessageText.bind(store)}
                 updateNewPostText = {store.updateNewPostText.bind(store)}
                 addMessage = {store.addMessage.bind(store)}/>

        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subcribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();