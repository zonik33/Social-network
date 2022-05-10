
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewMessageText, updateNewPostText} from "./redux/state";
import {addMessage} from "./redux/state";
import reportWebVitals from './reportWebVitals';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(

        <React.StrictMode>
            <App state = {state}
                 addPost = {addPost}
                 updateNewMessageText = {updateNewMessageText}
                 updateNewPostText = {updateNewPostText}
                 addMessage = {addMessage}      />

        </React.StrictMode>,
        document.getElementById('root')
    );
}