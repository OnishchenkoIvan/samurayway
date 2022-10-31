import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { HeaderLoginType } from "../../redux/store";

export const Header = (props: HeaderLoginType) => {
  return (
    <header className={s.header}>
      <img
        src="https://i.pinimg.com/originals/7f/c0/0d/7fc00d890352bfeea2239b8bfced0481.jpg"
        alt={"avatar"}
      />
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};
