import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { HeaderLoginType } from "../../redux/store";
import { logout } from "../../redux/auth-reducer";
import { useAppDispatch } from "../../redux/redux-store";

export const Header = (props: HeaderLoginType) => {
  const dispatch = useAppDispatch();
  const onClickLogoutButton = () => {
    dispatch(logout());
  };
  return (
    <header className={s.header}>
      <img
        src="https://i.pinimg.com/originals/7f/c0/0d/7fc00d890352bfeea2239b8bfced0481.jpg"
        alt={"avatar"}
      />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} -{" "}
            <button onClick={onClickLogoutButton}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
