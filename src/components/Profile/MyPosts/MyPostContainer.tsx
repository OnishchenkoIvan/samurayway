import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import { MyPosts } from "./MyPosts";
import { StoreReduxType } from "../../../redux/redux-store";

type Props = {
  store: StoreReduxType;
};
export const MyPostContainer = ({ store }: Props) => {
  const state = store.getState();

  const handleAddPost = () => {
    store.dispatch(addPostActionCreator(state.profileReducer.newPostText));
  };

  const onPostChange = (newPostText: string) => {
    store.dispatch(updateNewPostTextActionCreator(newPostText));
  };

  return (
    <div>
      <MyPosts
        handleAddPost={handleAddPost}
        onPostChange={onPostChange}
        newPostText={state.profileReducer.newPostText}
        posts={state.profileReducer.posts}
      />
    </div>
  );
};
