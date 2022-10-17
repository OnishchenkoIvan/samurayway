import React from "react";
import s from "./Users.module.css";
import { UsersPropsType } from "./UsersContainer";
import { v1 } from "uuid";

export const Users = (props: UsersPropsType) => {
  if (props.usersPage.users.length === 0) {
    props.setUsers([
      {
        id: v1(),
        photoUrl: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
        followed: false,
        fullName: "Dmitriy",
        status: "I'm a boss",
        location: { city: "Minsk", county: "Belarus" },
      },
      {
        id: v1(),
        photoUrl: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
        followed: true,
        fullName: "Ivan",
        status: "I'm a frontend developer",
        location: { city: "Sevastopol", county: "Russia" },
      },
      {
        id: v1(),
        photoUrl: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
        followed: false,
        fullName: "Alex",
        status: "I'm a student",
        location: { city: "Kiev", county: "Ukraine" },
      },
    ]);
  }
  return (
    <div>
      {props.usersPage.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={s.userPhoto} alt={"avatar"} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.county}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
