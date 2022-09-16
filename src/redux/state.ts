import { v1 } from "uuid";
import { rerenderEntireTree } from "../render";

export type StatePropsType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogPageType;
  sidebar: SidebarType;
};

export type PostsType = {
  id: string;
  message: string;
  likesCount: number;
};

export type DialogsType = {
  id: string;
  name: string;
};

export type MessagesType = {
  id: string;
  message: string;
};

export type ProfilePageType = {
  posts: Array<PostsType>;
  newPostText: string;
};

export type DialogPageType = {
  dialogs: Array<DialogsType>;
  messages: Array<MessagesType>;
};

export type SidebarType = {};

export let state: StatePropsType = {
  profilePage: {
    posts: [
      { id: v1(), message: "Hi, how are you?", likesCount: 6 },
      { id: v1(), message: "It's my first post", likesCount: 23 },
    ],
    newPostText: "it-kamasutre.com",
  },
  dialogsPage: {
    dialogs: [
      { id: v1(), name: "Dimych" },
      { id: v1(), name: "Andrew" },
      { id: v1(), name: "Sveta" },
      { id: v1(), name: "Sasha" },
      { id: v1(), name: "Victor" },
      { id: v1(), name: "Valera" },
    ],
    messages: [
      { id: v1(), message: "Hi" },
      { id: v1(), message: "How is your it-kamasutra" },
      { id: v1(), message: "Yo" },
      { id: v1(), message: "yooo" },
      { id: v1(), message: "hey" },
      { id: v1(), message: "ky" },
    ],
  },
  sidebar: {},
};

export let addPost = (postMessage: string) => {
  const newPost: PostsType = {
    id: v1(),
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};
