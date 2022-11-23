import { ProfileActionsTypes, DialogPageType } from "./store";
import { v1 } from "uuid";

const SEND_MESSAGE = "SEND_MESSAGE";

export const sendMessageCreator = (newMessageBody: string) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody,
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
  ],
};

export const dialogsReducer = (
  state: DialogPageType = initialState,
  action: ProfileActionsTypes
): DialogPageType => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: v1(), message: body }],
      };

    default:
      return state;
  }
};
