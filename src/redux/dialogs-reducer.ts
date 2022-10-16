import { ActionsTypes, DialogPageType } from "./store";
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

let initialState = {
  dialogs: [
    { id: v1(), name: "Dimych" },
    { id: v1(), name: "Andrew" },
    { id: v1(), name: "Sveta" },
    { id: v1(), name: "Sasha" },
    { id: v1(), name: "Victor" },
    { id: v1(), name: "Valera" },
  ],
  messages: [
    { id: v1(), message: "Hi" },
    { id: v1(), message: "How is your it-kamasutra" },
    { id: v1(), message: "Yo" },
    { id: v1(), message: "yooo" },
    { id: v1(), message: "hey" },
    { id: v1(), message: "ky" },
  ],
  newMessageBody: "",
};

export const dialogsReducer = (
  state: DialogPageType = initialState,
  action: ActionsTypes
): DialogPageType => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = { ...state };
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }

    case SEND_MESSAGE: {
      let stateCopy = { ...state };
      let body = stateCopy.newMessageBody;
      stateCopy.newMessageBody = "";
      stateCopy.messages.push({ id: v1(), message: body });
      return stateCopy;
    }
    default:
      return state;
  }
};
