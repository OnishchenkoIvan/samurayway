import React from "react";
import { Dialogs } from "../Dialogs";
import { StoreReduxType } from "../../../redux/redux-store";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../../redux/dialogs-reducer";

type DialogsPropsType = {
  store: StoreReduxType;
};

export const DialogsContainer = ({ store }: DialogsPropsType) => {
  let state = store.getState().dialogsReducer;
  let onSendMessageClick = () => {
    store.dispatch(sendMessageCreator(state.newMessageBody));
  };

  let onNewMessageChange = (body: string) => {
    store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  );
};
