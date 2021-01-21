import React from "react";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users_reducer";
import {connect} from "react-redux";
import Users from "./Users";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        }, unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        }, setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;