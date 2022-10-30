import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostContainer } from "./MyPosts/MyPostContainer";
import { ProfileType } from "../../redux/store";

type ProfilePropsType = {
  profile: ProfileType | null;
};

export const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostContainer />
    </div>
  );
};
