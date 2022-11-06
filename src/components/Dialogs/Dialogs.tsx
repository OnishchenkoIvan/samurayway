import React, { ChangeEvent } from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogsItem";
import { Message } from "./Message/Message";
import { DialogPageType } from "../../redux/store";
import { Redirect } from "react-router-dom";

type DialogsPropsType = {
  updateNewMessageBody: (body: string) => void;
  sendMessage: () => void;
  dialogsPage: DialogPageType;
  isAuth: boolean;
};

export const Dialogs = (props: DialogsPropsType) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => {
    return <DialogItem key={d.id} name={d.name} id={d.id} />;
  });

  let messagesElements = state.messages.map((m) => {
    return <Message key={m.id} message={m.message} id={m.id} />;
  });

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder={"Enter your message"}
            ></textarea>{" "}
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
