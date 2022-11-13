import React from "react";
import s from "./ProfileInfo.module.css";
import { Preloader } from "../../common/preload/Preloader";
import { ProfileType } from "../../../redux/store";
import { ProfileStatus } from "./ProfileStatus";

type ProfileInfoPropsType = {
  profile: ProfileType | null;
  status: string;
  updateStatus: (value: string) => void;
};

export const ProfileInfo = (props: ProfileInfoPropsType) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img
          src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?cs=srgb&dl=pexels-fabian-wiktor-994605.jpg&fm=jpg"
          alt={"beach"}
        />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile?.photos.large} alt={"avatar"} />
        <ProfileStatus
          userId={props.profile.userId ?? ""}
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};
