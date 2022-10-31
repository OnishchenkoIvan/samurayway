import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/avaimage.png";
import { UserType } from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

export type PropsUsersType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  users: UserType[];
  isFollowing: Array<boolean | string>;
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
  toggleFollowingProgress: (followingInProgress: boolean, id: string) => void;
};

export let Users = (props: PropsUsersType) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={props.currentPage === p ? `${s.selected}` : ""}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={s.userPhoto}
                  alt={"avatar"}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.isFollowing.some((id) => id === u.id)}
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    usersAPI.unfollow(u.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                      props.toggleFollowingProgress(false, u.id);
                    });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.isFollowing.some((id) => id === u.id)}
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    usersAPI.follow(u.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.follow(u.id);
                      }
                      props.toggleFollowingProgress(false, u.id);
                    });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.county"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
