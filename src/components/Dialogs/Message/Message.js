import s from './../Dialogs.module.css';

const Message = (props) => {
    return <div className={s.dialog}> 
    <div className={s.img}>
            <img src="https://cdn-icons-png.flaticon.com/512/84/84139.png">
                </img> {props.message} </div>
                </div>
}
export default Message;