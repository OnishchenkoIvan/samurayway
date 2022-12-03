import React from "react";
import { connect } from "react-redux";
import {
  follow,
  getUsers,
  setCurrentPage,
  toggleFollowingProgress,
  unfollow,
  UserType,
} from "../../redux/users-reducer";
import { AppStateType } from "../../redux/redux-store";
import { Users } from "./Users";
import { Preloader } from "../common/preload/Preloader";
import { compose } from "redux";

type MapStatePropsType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  isFollowing: Array<boolean | string>;
};

type MapDispatchToPropsType = {
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
  // setUsers: (users: UserType[]) => void;
  setCurrentPage: (pageNumber: number) => void;
  // setTotalUsersCount: (count: number) => void;
  // toggleIsFetching: (isFetching: boolean) => void;
  toggleFollowingProgress: (followingInProgress: boolean, id: string) => void;
  getUsers: (currentPage: number, pageSize: number) => void;
};

export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType;

class UsersContainers extends React.Component<UsersPropsType, {}> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFollowing={this.props.isFollowing}
            // toggleFollowingProgress={this.props.toggleFollowingProgress}
          />
        )}
      </>
    );
  }
}

export let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching,
    isFollowing: state.usersReducer.followingInProgress,
  };
};

export const UsersContainer = compose<React.ComponentType>(
  // withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
  })
)(UsersContainers);
