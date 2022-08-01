import React from "react";
import s from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/users.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount&pages.length < 10; i++){
            pages.push(i);
        }

        return <div>
            <div>
                { pages.map(p => {
                    return <span className={this.props.currentPage === p && s.selectPage}
                    onClick={(e)=>{this.onPageChanged(p); }}>{p}</span>;
                })}
            </div>
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
                            this.props.follows(u.id);
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
