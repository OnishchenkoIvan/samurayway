import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow,
  UserType,
} from "../../redux/users-reducer";
import { AppStateType } from "../../redux/redux-store";
import axios from "axios";
import { Users } from "./Users";
import { Preloader } from "../common/preload/Preloader";

type MapStatePropsType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
};

type MapDispatchToPropsType = {
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
  setUsers: (users: UserType[]) => void;
  setCurrentPage: (pageNumber: number) => void;
  setTotalUsersCount: (count: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
};

export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType;

class UsersContainers extends React.Component<UsersPropsType, {}> {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
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
  };
};

export const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainers);
