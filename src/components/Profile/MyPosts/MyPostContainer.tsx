import React from "react";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { Dispatch } from "redux";
import { PostsType } from "../../../redux/store";

type MapStatePropsType = {
  posts: PostsType[];
  // newPostText: string;
};

type MapDispatchToPropsType = {
  handleAddPost: (newPostText: string) => void;
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    posts: state.profileReducer.posts,
    // newPostText: state.profileReducer.newPostText,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    handleAddPost: (newPostText: string) => {
      dispatch(addPostActionCreator(newPostText));
    },
  };
};

export const MyPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
