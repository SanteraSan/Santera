import React from "react";
import s from "./Users.module.css";
import userPhoto from "../img/png-transparent-computer-icons-user-icon-design-help-portal-computer-orange-sphere.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.container}>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}> {p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id} className={s.wrapper}>
                    <div className={s.logo_button}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={'imaga must be here'}/>
                        </NavLink>
                        <div>{u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                        </div>
                    </div>
                    <div className={s.user_info}>
                        <div className={s.user_name_status}>
                            <div className={s.name}>{u.name}</div>
                            <div className={s.status}>{"u.status"}</div>
                        </div>
                        <div className={s.location}>
                            <span>{"u.location.Country"},</span><br/>
                            <span>{"u.location.City"}</span>
                        </div>
                    </div>
                </div>)
            }
        </div>)
};

export default Users