import { ActionsTypes, PostsType, StatePropsType } from "./state";
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

export const ProfileReducer = (state: StatePropsType, action: ActionsTypes) => {
  switch (action.type) {
    case ADD_POST:
      const newPost: PostsType = {
        id: v1(),
        message: action.postText,
        likesCount: 0,
      };
      state.profilePage.posts.push(newPost);
      state.profilePage.newPostText = "";
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.profilePage.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};
