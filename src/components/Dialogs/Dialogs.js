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
    return (
        <div className={s.alldialogs}>
            <div className={s.dialogs_item}>
                <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id} />
                <DialogItem name = {dialogsData[1].name} id = {dialogsData[1].id} />
            </div>
            <div className={s.message}>
                <Message message ={messageData[0].message}/>
                <Message message ={messageData[1].message}/>
            <div className={s.message}>
                <Message message ={messageData[2].message}/>
            </div>
            </div>
        </div>
    )

}

export default Dialogs;