import React, { FC } from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogsItem";
import { Message } from "./Message/Message";
import { DialogPageType } from "../../redux/store";
import { Field, reduxForm } from "redux-form";
import { InjectedFormProps } from "redux-form/lib/reduxForm";

type DialogsPropsType = {
  updateNewMessageBody: (body: string) => void;
  sendMessage: (newMessageBody: string) => void;
  dialogsPage: DialogPageType;
  isAuth: boolean;
};

export const Dialogs = (props: DialogsPropsType) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => {
    return <DialogItem key={d.id} name={d.name} id={d.id} />;
  });

  let messagesElements = state.messages.map((m) => {
    return <Message key={m.id} message={m.message} id={m.id} />;
  });

  let addNewMessage = (values: { newMessageBody: string }) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm: FC<InjectedFormProps<{ newMessageBody: string }>> = (
  props
) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newMessageBody"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button>Send</button>{" "}
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm<{ newMessageBody: string }>({
  form: "dialogAddMessageForm",
})(AddMessageForm);
