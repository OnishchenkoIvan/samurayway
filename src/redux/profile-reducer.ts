import { ActionsTypes, PostsType, ProfilePageType, ProfileType } from "./store";
import { v1 } from "uuid";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

export const addPostActionCreator = (postText: string) => {
  return {
    type: ADD_POST,
    postText: postText,
  } as const;
};
export const setUserProfile = (profile: ProfileType) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  } as const;
};

export const updateNewPostTextActionCreator = (newText: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: newText,
  } as const;
};

let initialState: ProfilePageType = {
  posts: [
    { id: v1(), message: "Hi, how are you?", likesCount: 6 },
    { id: v1(), message: "It's my first post", likesCount: 23 },
  ],
  newPostText: "it-kamasutra.com",
  profile: null,
};

export const profileReducer = (
  state: ProfilePageType = initialState,
  action: ActionsTypes
): ProfilePageType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost: PostsType = {
        id: v1(),
        message: action.postText,
        likesCount: 0,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };
    }

    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};
