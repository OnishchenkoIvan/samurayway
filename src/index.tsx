import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { v1 } from "uuid";

export type Posts = {
  id: string;
  message: string;
  likesCount: number;
};

let posts: Array<Posts> = [
  { id: v1(), message: "Hi, how are you?", likesCount: 6 },
  { id: v1(), message: "It's my first post", likesCount: 23 },
];

export type DialogsType = {
  id: string;
  name: string;
};

let dialogs: Array<DialogsType> = [
  { id: v1(), name: "Dimych" },
  { id: v1(), name: "Andrew" },
  { id: v1(), name: "Sveta" },
  { id: v1(), name: "Sasha" },
  { id: v1(), name: "Victor" },
  { id: v1(), name: "Valera" },
];

export type Messages = {
  id: string;
  message: string;
};
let messages: Messages[] = [
  { id: v1(), message: "Hi" },
  { id: v1(), message: "How is your it-kamasutra" },
  { id: v1(), message: "Yo" },
  { id: v1(), message: "yooo" },
  { id: v1(), message: "hey" },
  { id: v1(), message: "ky" },
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
