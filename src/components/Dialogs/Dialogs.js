import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Message = (props) => {
    return <div className={s.dialog}> 
    <div className={s.img}>
            <img src="https://cdn-icons-png.flaticon.com/512/84/84139.png">
                </img> {props.message} </div>
                </div>
}
const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog}>
            <div className={s.img}>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png">
                </img>
                <NavLink to = {path}> {props.name} </NavLink>
            </div>
            </div>

}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Рома'},
        {id: 2, name: 'Кирилл'}
    ]
    let messageData = [
        {id: 1, message: 'Привет ХИХХИ'},
        {id: 2, message: 'Привет Хфвфыв'},
        {id: 3, message: 'Привет ыЧЕЛ!'}
    ]


    let dialogsElements = dialogsData.map( d =>  <DialogItem name = {d.name} id = {d.id}/>  );



    let messageElements = messageData.map( m => <Message message ={m.message}/>)
    return (
        <div className={s.alldialogs}>
            <div className={s.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={s.message}>
                { messageElements }
            </div>
        </div>
    )

}

export default Dialogs;