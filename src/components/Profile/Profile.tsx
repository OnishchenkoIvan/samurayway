import React from "react";
import s from "./Profile.module.css";
import { MyPosts } from "./MyPosts/MyPosts";

export const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?cs=srgb&dl=pexels-fabian-wiktor-994605.jpg&fm=jpg"
          alt={"beach"}
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};
