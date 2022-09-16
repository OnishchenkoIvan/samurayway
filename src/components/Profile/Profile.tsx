import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfilePageType } from "../../redux/state";

type ProfilePropsType = {
  profilePage: ProfilePageType;
  newPostText: string;
  addPost: (postMessage: string) => void;
  changeNewTextCallback: (newText: string) => void;
};

export const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost}
        changeNewTextCallback={props.changeNewTextCallback}
      />
    </div>
  );
};
