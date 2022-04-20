import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './Dialogitem/Dialogitem';


const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map( d =>  <DialogItem name = {d.name} id = {d.id}/>  );
    let messageElements = props.messageData.map( m => <Message message ={m.message}/>)
    return (
        <div className={s.alldialogs}>
            <div className={s.dialogs_item}>

                { dialogsElements }

            </div>
            <div className={s.message}>

                { messageElements }
                
            </div>
        </div>
    )

}

export default Dialogs;