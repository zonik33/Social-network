import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './Dialogitem/Dialogitem';
import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState();

    let onClickButton = () => {
        props.store.dispatch(addMessageActionCreator());
    }
   let onChangeClick = (text) => {
        let action = updateNewMessageTextActionCreator (text);
       props.store.dispatch(action);
   }
    return (
        <Dialogs addMessage = {onClickButton}
                 newTextMessage = {state.messagePage.newTextMessage}
                 dialogsData = {state.messagePage.dialogsData}
                 messageData = {state.messagePage.messageData}
                 updateNewPostMessage = {onChangeClick}/>

    )
};

export default DialogsContainer;