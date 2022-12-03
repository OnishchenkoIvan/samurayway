import { AppStateType } from "./redux-store";
import { createSelector } from "reselect";
const getUsersSelector = (state: AppStateType) => {
  return state.usersReducer.users;
};

export const getUsers = createSelector(getUsersSelector, (users) => {
  return users.filter((u) => true);
});

export const getPageSize = (state: AppStateType) => {
  return state.usersReducer.pageSize;
};

export const getTotalUsersCount = (state: AppStateType) => {
  return state.usersReducer.totalUsersCount;
};
export const getCurrentPage = (state: AppStateType) => {
  return state.usersReducer.currentPage;
};
export const getIsFetching = (state: AppStateType) => {
  return state.usersReducer.isFetching;
};
export const getFollowingInProgress = (state: AppStateType) => {
  return state.usersReducer.followingInProgress;
};
