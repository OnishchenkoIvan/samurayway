import React from "react";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://i.pinimg.com/originals/7f/c0/0d/7fc00d890352bfeea2239b8bfced0481.jpg"
        alt={"avatar"}
      />
    </header>
  );
};
