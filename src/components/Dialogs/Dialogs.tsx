import React from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogsItem";
import { Message } from "./Message/Message";
import { DialogsType, Messages } from "../../index";

type DialogsPropsType = {
  dialogs: Array<DialogsType>;
  messages: Messages[];
};

export const Dialogs = (props: DialogsPropsType) => {
  let dialogsElements = props.dialogs.map((d) => {
    return <DialogItem name={d.name} id={d.id} />;
  });

  let messagesElements = props.messages.map((m) => {
    return <Message message={m.message} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};
