import React from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogsItem";
import { Message } from "./Message/Message";
import { DialogPageType } from "../../redux/state";

type DialogsPropsType = {
  dialogPage: DialogPageType;
};

export const Dialogs = (props: DialogsPropsType) => {
  let dialogsElements = props.dialogPage.dialogs.map((d) => {
    return <DialogItem name={d.name} id={d.id} />;
  });
  let messagesElements = props.dialogPage.messages.map((m) => {
    return <Message message={m.message} id={m.id} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};
