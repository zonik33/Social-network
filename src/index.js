import state, {subcribe} from './redux/state';
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
                 addPost = {addPost}
                 updateNewMessageText = {updateNewMessageText}
                 updateNewPostText = {updateNewPostText}
                 addMessage = {addMessage}/>

        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);
subcribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();