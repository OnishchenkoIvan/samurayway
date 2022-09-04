import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfilePageType } from "../../redux/state";

type ProfilePropsType = {
  profilePage: ProfilePageType;
  addPost: (postMessage: string) => void;
};

export const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} addPost={props.addPost} />
    </div>
  );
};
