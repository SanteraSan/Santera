import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../Redux/users_reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {getUsers} from "../../api/api";


class UsersApiComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            // debugger;
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        getUsers(pageNumber, this.props.pageSize).then(data => {
            // debugger;
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);
        })
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    };
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow:(userId) =>{
//             dispatch(followAC(userId))
//         },
//         unfollow:(userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers:(users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage:(pageNumber) => {
//             dispatch(setCurrentPagesAC(pageNumber))
//         },
//         setTotalUsersCount:(counts) => {
//             dispatch(setTotalUsersCountAC(counts))
//         },
//         toggleIsFetching:(isFetching) => {
//             dispatch(setIsFetchingAC(isFetching))
//         },
//     };
// };


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersApiComponent);
