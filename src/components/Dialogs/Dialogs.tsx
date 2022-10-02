import React, { ChangeEvent } from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogsItem";
import { Message } from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import { store, StoreType } from "../../redux/state";

type DialogsPropsType = {
  // dialogPage: DialogPageType;
  store: StoreType;
};

export const Dialogs = (props: DialogsPropsType) => {
  let state = store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((d) => {
    return <DialogItem name={d.name} id={d.id} />;
  });

  let messagesElements = state.messages.map((m) => {
    return <Message message={m.message} id={m.id} />;
  });

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    store.dispatch(sendMessageCreator(newMessageBody));
  };
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.target.value;
    store.dispatch(updateNewMessageBodyCreator(body));
  };

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
