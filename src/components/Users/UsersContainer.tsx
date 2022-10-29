import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
  UserType,
} from "../../redux/users-reducer";
import { AppStateType } from "../../redux/redux-store";
import axios from "axios";
import { Users } from "./Users";

type MapStatePropsType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
};

type MapDispatchToPropsType = {
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
  setUsers: (users: UserType[]) => void;
  setCurrentPage: (pageNumber: number) => void;
  setTotalUsersCount: (count: number) => void;
};

export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType;

class UsersContainers extends React.Component<UsersPropsType, {}> {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

export let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
  };
};

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    follow: (userId: string) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId: string) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users: UserType[]) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (count: number) => {
      dispatch(setTotalUsersCountAC(count));
    },
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainers);
