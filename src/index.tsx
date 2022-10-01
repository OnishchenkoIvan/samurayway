import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          // addPost={addPost}
          // changeNewTextCallback={updateNewPostText}
          // state={state}
          // dispatch={store.dispatch.bind(store)}
          store={store}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerenderEntireTree();
store.subscribe(rerenderEntireTree);
reportWebVitals();
