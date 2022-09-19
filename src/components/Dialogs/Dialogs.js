import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './Dialogitem/Dialogitem';
import React from 'react';
import {Navigate} from "react-router-dom";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map( d =>  <DialogItem name = {d.name} id = {d.id}/>  );
    let messageElements = props.messageData.map( m => <Message message ={m.message}/>)

    let onClickButton = () => {
        props.addMessage();
        //props.dispatch(addMessageActionCreator());
    }


   let onChangeClick = (e) => {
        let text = e.target.value;
       props.updateNewPostMessage(text)
   }

 if(!props.isAuth) return <Navigate to={"/login"}/>;

    return (
        <div className={s.alldialogs}>
            <div className={s.dialogs_item}>

                { dialogsElements }

            </div>
            <div className={s.message}>

                { messageElements }
                
            </div>
            <div>
                <textarea onChange={onChangeClick}
                          value={props.newTextMessage}  />
            </div>
            <div>
                <button onClick={onClickButton}>
                    Тык
                </button>
            </div>
            </div>
        
    )

}

export default Dialogs;