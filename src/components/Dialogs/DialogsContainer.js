import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagePage.dialogsData,
        newTextMessage: state.messagePage.newTextMessage,
        messageData: state.messagePage.messageData,

    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateNewPostMessage: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
}
let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;