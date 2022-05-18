import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './Dialogitem/Dialogitem';
import React from 'react';
import {updateNewMessageText} from "../../redux/state";


const Dialogs = (props) => {

    const ref = React.createRef();
    let onClickButton = () => {
    props.dispatch({ type: 'ADD-MESSAGE' });
        debugger;
    }

    let dialogsElements = props.state.dialogsData.map( d =>  <DialogItem name = {d.name} id = {d.id}/>  );
    let messageElements = props.state.messageData.map( m => <Message message ={m.message}/>)

   let onChangeClick = () => {
       let text = ref.current.value;
       props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
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
                <textarea onChange={onChangeClick} ref={ref} value={props.state.newTextMessage}  />
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