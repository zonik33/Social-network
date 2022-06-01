import React from "react";
import s from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
                followed: true,
                fullName: 'Рома',
                status: 'Im fine',
                location: {city: 'Russia', country: 'Penza'}
            },
            {
                id: 2,
                photoUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
                followed: true,
                fullName: 'Кирилл',
                status: 'Im fine too',
                location: {city: 'Russia', country: 'Moscow'}
            },
            {
                id: 3,
                photoUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
                followed: false,
                fullName: 'Дима',
                status: 'Im fine too',
                location: {city: 'Russia', country: 'Penza'}
            },
            {
                id: 4,
                photoUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
                followed: false,
                fullName: 'Влад',
                status: 'Im fine too',
                location: {city: 'Russia', country: 'Penza'}
            },
        ],)
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span className={s.photoAndButton}>
                <div className={s.fullblock}>
                    <img className={s.img} src={u.photoUrl}></img>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follows(u.id)
                        }}>Follow</button>}
                </div>
                 </span>
                <span className={s.nameAndStatus}>
                  <div>{u.fullName}</div>
                  <div>{u.status}</div>
                  </span>
                <span className='ForUsersToo'>
                  <div>{u.location.city}</div>
                  <div>{u.location.country}</div>
                  </span>

            </div>)
        }
    </div>
}
export default Users;