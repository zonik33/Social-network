import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.alldialogs}>
            <div className={s.dialogs_item}>
                <div className={s.dialog}>
                    <div className={s.img}>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png">
                            </img>
                    Roma
                    </div>
                </div>
                <div className={s.dialog}>
                <div className={s.img}>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png">
                            </img>
                    Vlad
                    </div>
                </div>
            </div>
            <div className={s.message}>
                <div className={s.dialog}>
                <div className={s.img}>
                        <img src="https://cdn-icons-png.flaticon.com/512/84/84139.png">
                            </img>HI! </div></div>
                <div className={s.dialog} >
                <div className={s.img}>
                        <img src="https://cdn-icons-png.flaticon.com/512/84/84139.png">
                            </img>Hello! </div></div>
            </div>
        </div>
    )

}

export default Dialogs;