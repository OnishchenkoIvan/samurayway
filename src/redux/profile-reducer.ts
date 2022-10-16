import { ActionsTypes, PostsType, ProfilePageType } from "./store";
import { v1 } from "uuid";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = (postText: string) => {
  return {
    type: ADD_POST,
    postText: postText,
  } as const;
};

export const updateNewPostTextActionCreator = (newText: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: newText,
  } as const;
};

let initialState = {
  posts: [
    { id: v1(), message: "Hi, how are you?", likesCount: 6 },
    { id: v1(), message: "It's my first post", likesCount: 23 },
  ],
  newPostText: "it-kamasutra.com",
};

export const profileReducer = (
  state: ProfilePageType = initialState,
  action: ActionsTypes
) => {
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
    default:
      return state;
  }
};
