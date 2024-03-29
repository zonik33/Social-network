import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './Dialogitem/Dialogitem';
import React from 'react';
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.messageData.map(m => <Message message={m.message}/>)

    let addNewMessage = (values) => {
        props.addMessage(values.newTextMessage);
    }
    if (!props.isAuth) return <Navigate to={"/login"}/>;

    return (
        <div className={s.alldialogs}>
            <div className={s.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={s.message}>
                {messageElements}
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>

    )
}

const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]} name={"newTextMessage"} placeholder={"Enter your message"}></Field>
            </div>
            <div>
                <button>Тык</button>
            </div>
        </form>)
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;