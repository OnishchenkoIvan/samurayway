import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addPost, StatePropsType, updateNewPostText } from "./redux/state";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const rerenderEntireTree = (state: StatePropsType) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          changeNewTextCallback={updateNewPostText}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};
