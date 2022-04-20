import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

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
export default DialogItem;