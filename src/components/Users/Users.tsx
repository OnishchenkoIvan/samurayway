import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/avaimage.png";
import { UserType } from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";
import axios from "axios";

export type PropsUsersType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  users: UserType[];
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
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
                  onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                          withCredentials: true,
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id);
                        }
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
