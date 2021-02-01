import React from 'react';
import styles from './users.module.css'
import userPhoto from '../../assets/images/m1000x1000.jpg'
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users,...props}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        {
            users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress}
                                 unfollow={props.unfollow} follow={props.follow}/>)
        }
    </div>
}


export default Users;