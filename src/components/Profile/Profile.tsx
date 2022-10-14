import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { StoreReduxType } from "../../redux/redux-store";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../redux/profile-reducer";

type ProfilePropsType = {
  store: StoreReduxType;
};

export const Profile = (props: ProfilePropsType) => {
  const state = props.store.getState();

  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={state.profileReducer.posts}
        newPostText={state.profileReducer.newPostText}
        addPost={addPostActionCreator}
        changeNewTextCallback={updateNewPostTextActionCreator}
        dispatch={props.store.dispatch}
      />
    </div>
  );
};
