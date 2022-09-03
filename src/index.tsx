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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App posts={posts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
