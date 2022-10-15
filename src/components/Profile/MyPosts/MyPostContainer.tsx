import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import { MyPosts } from "./MyPosts";
import { StoreContext } from "../../../StoreContext";

export const MyPostContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();

        const handleAddPost = () => {
          store.dispatch(
            addPostActionCreator(state.profileReducer.newPostText)
          );
        };

        const onPostChange = (newPostText: string) => {
          store.dispatch(updateNewPostTextActionCreator(newPostText));
        };
        return (
          <MyPosts
            handleAddPost={handleAddPost}
            onPostChange={onPostChange}
            newPostText={state.profileReducer.newPostText}
            posts={state.profileReducer.posts}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
