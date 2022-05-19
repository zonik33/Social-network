import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './Dialogitem/Dialogitem';
import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let onClickButton = () => {
    props.dispatch(addMessageActionCreator());
    }

    let dialogsElements = props.state.dialogsData.map( d =>  <DialogItem name = {d.name} id = {d.id}/>  );
    let messageElements = props.state.messageData.map( m => <Message message ={m.message}/>)

   let onChangeClick = (e) => {
        let text = e.target.value;
       props.dispatch(updateNewMessageTextActionCreator(text));
   }
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
                          value={props.state.newTextMessage}  />
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