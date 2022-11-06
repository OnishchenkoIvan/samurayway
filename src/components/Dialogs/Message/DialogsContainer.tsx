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

type MapStatePropsType = {
  dialogsPage: DialogPageType;
  isAuth: boolean;
};

type MapDispatchToPropsType = {
  updateNewMessageBody: (body: string) => void;
  sendMessage: () => void;
};

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    dialogsPage: state.dialogsReducer,
    isAuth: state.authReducer.isAuth,
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
