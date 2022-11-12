import React from "react";
import { Dialogs } from "../Dialogs";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { AppStateType, store } from "../../../redux/redux-store";
import { DialogPageType } from "../../../redux/store";
import { compose, Dispatch } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";

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

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
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

export const DialogsContainer = compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
