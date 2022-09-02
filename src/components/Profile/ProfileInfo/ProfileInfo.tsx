import React from "react";
import s from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?cs=srgb&dl=pexels-fabian-wiktor-994605.jpg&fm=jpg"
          alt={"beach"}
        />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};
