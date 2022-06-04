import React from "react";
import s from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/users.png'

class Users extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger;
                this.props.setUsers(response.data.items)
            })
        }

    }
    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
            <span className={s.photoAndButton}>
                <div className={s.fullblock}>
                    <img className={s.img} src={u.photos.small != null ? u.photos.small : userPhoto}></img>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follows(u.id)
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
}


export default Users;
