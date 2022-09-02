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
  let dialogsData = [
    { id: v1(), name: "Dimych" },
    { id: v1(), name: "Andrew" },
    { id: v1(), name: "Sveta" },
    { id: v1(), name: "Sasha" },
    { id: v1(), name: "Victor" },
    { id: v1(), name: "Valera" },
  ];
  let messagesData = [
    { id: v1(), message: "Hi" },
    { id: v1(), message: "How is your it-kamasutra" },
    { id: v1(), message: "Yo" },
    { id: v1(), message: "yooo" },
    { id: v1(), message: "hey" },
    { id: v1(), message: "ky" },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
      </div>
    </div>
  );
};
