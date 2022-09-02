import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { v1 } from "uuid";

type DialogItem = {
  name: string;
  id: string;
};

const DialogItem = (props: DialogItem) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

type Message = {
  message: string;
};

const Message = (props: Message) => {
  return <div className={s.dialog}>{props.message}</div>;
};

export const Dialogs = () => {
  let dialogs = [
    { id: v1(), name: "Dimych" },
    { id: v1(), name: "Andrew" },
    { id: v1(), name: "Sveta" },
    { id: v1(), name: "Sasha" },
    { id: v1(), name: "Victor" },
    { id: v1(), name: "Valera" },
  ];

  let messages = [
    { id: v1(), message: "Hi" },
    { id: v1(), message: "How is your it-kamasutra" },
    { id: v1(), message: "Yo" },
    { id: v1(), message: "yooo" },
    { id: v1(), message: "hey" },
    { id: v1(), message: "ky" },
  ];

  let dialogsElements = dialogs.map((d) => {
    return <DialogItem name={d.name} id={d.id} />;
  });

  let messagesElements = messages.map((m) => {
    return <Message message={m.message} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};
