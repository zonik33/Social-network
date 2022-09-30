import React from 'react';
import {addMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagePage.dialogsData,
        newTextMessage: state.messagePage.newTextMessage,
        messageData: state.messagePage.messageData,

    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        addMessage: (newTextMessage) => {
            dispatch(addMessageActionCreator(newTextMessage));
        }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)