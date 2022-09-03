import React from "react";
import s from "./../Dialogs.module.css";

type Message = {
  message: string;
};

export const Message = (props: Message) => {
  return <div className={s.dialog}>{props.message}</div>;
};
