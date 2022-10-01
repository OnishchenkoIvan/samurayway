import { v1 } from "uuid";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

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
  newMessageBody: string;
};

export type SidebarType = {};

export type StoreType = {
  _state: StatePropsType;
  updateNewPostText: (newText: string) => void;
  addPost: (postMessage: string) => void;
  _rerenderEntireTree: () => void;
  subscribe: (observer: () => void) => void;
  getState: () => StatePropsType;
  dispatch: (action: ActionsTypes) => void;
};

export type ActionsTypes =
  | ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof updateNewPostTextActionCreator>
  | ReturnType<typeof updateNewMessageBodyCreator>
  | ReturnType<typeof sendMessageCreator>;

export const addPostActionCreator = (postText: string) => {
  return {
    type: ADD_POST,
    postText: postText,
  } as const;
};

export const updateNewPostTextActionCreator = (newText: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: newText,
  } as const;
};

export const updateNewMessageBodyCreator = (newMessage: string) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: newMessage,
  } as const;
};
export const sendMessageCreator = (newMessage: string) => {
  return {
    type: SEND_MESSAGE,
    body: newMessage,
  } as const;
};

export const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: v1(), message: "Hi, how are you?", likesCount: 6 },
        { id: v1(), message: "It's my first post", likesCount: 23 },
      ],
      newPostText: "it-kamasutra.com",
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
      newMessageBody: "",
    },
    sidebar: {},
  },
  updateNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree();
  },
  addPost(postMessage: string) {
    const newPost: PostsType = {
      id: v1(),
      message: postMessage,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._rerenderEntireTree();
  },
  _rerenderEntireTree() {
    console.log("State changed");
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost: PostsType = {
        id: v1(),
        message: action.postText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._rerenderEntireTree();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._rerenderEntireTree();
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._rerenderEntireTree();
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({ id: v1(), message: body });
      this._rerenderEntireTree();
    }
  },
};
// store - OOP
