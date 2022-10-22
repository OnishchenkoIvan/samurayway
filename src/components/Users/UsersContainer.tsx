import React from "react";
import { Users } from "./Users";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  followAC,
  setUsersAC,
  unfollowAC,
  UserType,
} from "../../redux/users-reducer";
import { AppStateType } from "../../redux/redux-store";

type MapStatePropsType = {
  users: UserType[];
};

type MapDispatchToPropsType = {
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
  setUsers: (users: UserType[]) => void;
};

export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType;

export let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: state.usersReducer.users,
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
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
