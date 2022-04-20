import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  {id: 1, name: 'Рома'},
  {id: 2, name: 'Кирилл'}
]
let messageData = [
  {id: 1, message: 'Привет ХИХХИ'},
  {id: 2, message: 'Привет Хфвфыв'},
  {id: 3, message: 'Привет ыЧЕЛ!'}
]

let postData = [
  {id: 1, message: 'Hi, how are u?', like: '5'},
  {id: 2, message: 'Its my first post', like: '25'},
  {id: 3, message: 'HEY', like: '2'},
  {id: 4, message: 'HOW ARE U?', like: '111'}
]
ReactDOM.render(
  
  <React.StrictMode>
    <App dialogsData = {dialogsData} messageData = {messageData} postData = {postData} />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();