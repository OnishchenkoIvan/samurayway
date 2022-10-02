import { ActionsTypes, StatePropsType } from "./state";
import { v1 } from "uuid";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

export const updateNewMessageBodyCreator = (newMessage: string) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: newMessage,
  } as const;
};
export const sendMessageCreator = (newMessage: string) => {
  return {
    type: SEND_MESSAGE,
    body: newMessage,
  } as const;
};

export const DialogsReducer = (state: StatePropsType, action: ActionsTypes) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.dialogsPage.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE:
      let body = state.dialogsPage.newMessageBody;
      state.dialogsPage.newMessageBody = "";
      state.dialogsPage.messages.push({ id: v1(), message: body });
      return state;
    default:
      return state;
  }
};
