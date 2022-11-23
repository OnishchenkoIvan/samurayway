import React from "react";
import { Dialogs } from "../Dialogs";
import { sendMessageCreator } from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { DialogPageType } from "../../../redux/store";
import { compose, Dispatch } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";

type MapStatePropsType = {
  dialogsPage: DialogPageType;
};

type MapDispatchToPropsType = {
  sendMessage: (newMessageBody: string) => void;
};

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    dialogsPage: state.dialogsReducer,
  };
};

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    sendMessage: (newMessageBody: string) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
  };
};

export const DialogsContainer = compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
