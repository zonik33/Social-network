import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/users.png";
import {NavLink} from "react-router-dom";


let User = ({user,followingInProgress,follow, unfollow }) => {
    return (
        <div>
            <span className={s.photoAndButton}>
                <div className={s.fullblock}>
                    <NavLink to={'/profile/' + user.id}>
                    <img className={s.img} src={user.photos.small != null ? user.photos.small : userPhoto}></img>
                </NavLink>
                    </div>
                <div>

                    {
                        user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id);




                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id);


                        }}>Follow</button>}
                </div>
                 </span>
                    <span className={s.nameAndStatus}>
                  <div>{user.name}</div>
                  <div>{user.status}</div>
                  </span>
                    <span className='ForUsersToo'>
                  <div>{"u.location.city"}</div>
                  <div>{"u.location.country"}</div>
                  </span>

                </div>)
}
    export default User;