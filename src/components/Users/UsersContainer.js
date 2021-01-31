import React from "react";
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow} from "../../redux/users_reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getTotalUsersCount,
    getAllUsers
} from "../../redux/users_selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        pageSize:getPageSize (state),
        totalUsersCount: getTotalUsersCount (state),
        currentPage: getCurrentPage (state),
        isFetching: getIsFetching (state),
        followingInProgress:getFollowingInProgress (state),
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {follow, unfollow, toggleFollowingProgress, setCurrentPage, getUsers})
)(UsersContainer);

