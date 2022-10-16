import React from "react";
import { Dialogs } from "../Dialogs";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { AppStateType, store } from "../../../redux/redux-store";
import { DialogPageType } from "../../../redux/store";
import { Dispatch } from "redux";

// export const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().dialogsReducer;
//         let onSendMessageClick = () => {
//           store.dispatch(sendMessageCreator(state.newMessageBody));
//         };
//
//         let onNewMessageChange = (body: string) => {
//           store.dispatch(updateNewMessageBodyCreator(body));
//         };
//         return (
//           <Dialogs
//             updateNewMessageBody={onNewMessageChange}
//             sendMessage={onSendMessageClick}
//             dialogsPage={state}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
type MapStatePropsType = {
  dialogsPage: DialogPageType;
};

type MapDispatchToPropsType = {
  updateNewMessageBody: (body: string) => void;
  sendMessage: () => void;
};

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    dialogsPage: state.dialogsReducer,
  };
};

let MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    updateNewMessageBody: (body: string) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(
        sendMessageCreator(store.getState().dialogsReducer.newMessageBody)
      );
    },
  };
};

export const DialogsContainer = connect(
  mapStateToProps,
  MapDispatchToProps
)(Dialogs);
