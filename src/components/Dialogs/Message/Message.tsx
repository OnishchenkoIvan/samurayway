import React from "react";
import s from "./../Dialogs.module.css";
import { MessagesType } from "../../../redux/store";

export const Message = (props: MessagesType) => {
  const newMessageElement = React.createRef<HTMLTextAreaElement>();

  const addMessage = () => {
    const text = newMessageElement.current?.value;
    alert(text);
  };
  return (
    <div>
      <div className={s.dialog}>{props.message}</div>
      {/*<textarea ref={newMessageElement}></textarea>*/}
      {/*<button onClick={addMessage}>send</button>*/}
    </div>
  );
};
