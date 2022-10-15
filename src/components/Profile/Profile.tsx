import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { StoreReduxType } from "../../redux/redux-store";
import { MyPostContainer } from "./MyPosts/MyPostContainer";

type ProfilePropsType = {
  store: StoreReduxType;
};

export const Profile = ({ store }: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostContainer store={store} />
    </div>
  );
};
