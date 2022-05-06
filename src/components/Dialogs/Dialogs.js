import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './Dialogitem/Dialogitem';
import React from 'react';


const Dialogs = (props) => {

    const ref = React.createRef();
    let onClickButton = () => {
        debugger;
        let text = ref.current.value;
        props.addMessage(text);
    }

    let dialogsElements = props.state.dialogsData.map( d =>  <DialogItem name = {d.name} id = {d.id}/>  );
    let messageElements = props.state.messageData.map( m => <Message message ={m.message}/>)
    return (
        <div className={s.alldialogs}>
            <div className={s.dialogs_item}>

                { dialogsElements }

            </div>
            <div className={s.message}>

                { messageElements }
                
            </div>
            <div>
                <textarea ref={ref}></textarea>
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