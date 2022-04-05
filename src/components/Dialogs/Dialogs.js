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
    return (
        <div className={s.alldialogs}>
            <div className={s.dialogs_item}>
                <DialogItem name = "Рома" id = "1" />
                <DialogItem name = "Кирилл" id = "2" />
            </div>
            <div className={s.message}>
                <Message message ="Привет ХИХХИ"/>
                <Message message ="Привет Хфвфыв"/>
            <div className={s.message}>
                <Message message ="Привет, ыЧЕЛ!"/>
            </div>
            </div>
        </div>
    )

}

export default Dialogs;