import React from "react";
import { Dialogs } from "../Dialogs";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../../redux/dialogs-reducer";
import { StoreContext } from "../../../StoreContext";

export const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
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
      }}
    </StoreContext.Consumer>
  );
};
