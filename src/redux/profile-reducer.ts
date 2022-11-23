import {
  ProfileActionsTypes,
  AppThunk,
  PostsType,
  ProfilePageType,
  ProfileType,
} from "./store";
import { v1 } from "uuid";
import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

export const addPostActionCreator = (newPostText: string) => {
  return {
    type: ADD_POST,
    newPostText,
  } as const;
};
export const setUserProfile = (profile: ProfileType) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  } as const;
};

export const getUserProfile =
  (userId: string) => (dispatch: (callback: ProfileActionsTypes) => void) => {
    usersAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };

export const getStatus =
  (userId: string): AppThunk =>
  (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };

export const updateStatus =
  (status: string, userId: string): AppThunk =>
  (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getStatus(userId));
      }
    });
  };

export const setStatus = (status: string) => {
  return {
    type: SET_STATUS,
    status,
  } as const;
};

let initialState: ProfilePageType = {
  posts: [
    { id: v1(), message: "Hi, how are you?", likesCount: 6 },
    { id: v1(), message: "It's my first post", likesCount: 23 },
  ],
  profile: null,
  status: "",
};

export const profileReducer = (
  state: ProfilePageType = initialState,
  action: ProfileActionsTypes
): ProfilePageType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost: PostsType = {
        id: v1(),
        message: action.newPostText,
        likesCount: 0,
      };
      return { ...state, posts: [...state.posts, newPost] };
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};
