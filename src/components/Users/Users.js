import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/users.png";
import {NavLink} from "react-router-dom";
import axios from "axios";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount & pages.length < 10; i++) {
        pages.push(i);
    }
        return <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectPage}
                                 onClick={() => {
                                     props.onPageChanged(p);
                                 }}>{p}</span>;
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
            <span className={s.photoAndButton}>
                <div className={s.fullblock}>
                    <NavLink to={'/profile/' + u.id}>
                    <img className={s.img} src={u.photos.small != null ? u.photos.small : userPhoto}></img>
                </NavLink>
                    </div>
                <div>

                    {
                        u.followed
                        ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {withCredentials: true,
                                        headers: {
                                        "API-KEY": "19dddd67-7759-4968-a840-8072d8c57efb"
                                        }
                                    })
                                    .then(response => {
                                        if(response.data.resultCode == 0){
                                            props.unfollow(u.id)
                                        }
                                    });



                        }}>Unfollow</button>
                        : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {},
                                    {withCredentials: true, headers: {
                                            "API-KEY": "19dddd67-7759-4968-a840-8072d8c57efb"
                                        }
                                })
                                    .then(response => {
                                        if(response.data.resultCode == 0){
                                            props.follow(u.id)
                                        }
                                    });
                        }}>Follow</button>}
                </div>
                 </span>
                    <span className={s.nameAndStatus}>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                  </span>
                    <span className='ForUsersToo'>
                  <div>{"u.location.city"}</div>
                  <div>{"u.location.country"}</div>
                  </span>

                </div>)
            }
        </div>
    }
    export default Users;