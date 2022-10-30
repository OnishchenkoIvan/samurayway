import {
  addPostActionCreator,
  setUserProfile,
  updateNewPostTextActionCreator,
} from "./profile-reducer";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "./dialogs-reducer";

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

export type ProfileType = {
  userId: string | null;
  lookingForAJob: boolean | null;
  lookingForAJobDescription: string | null;
  fullName: string | null;
  contacts: {
    facebook: string | null;
    github: string | null;
    instagram: string | null;
    mainLink: string | null;
    twitter: string | null;
    vk: string | null;
    website: string | null;
    youtube: string | null;
  };
  photos: {
    large: string | undefined;
    small: string | undefined;
  };
};

export type ProfilePageType = {
  posts: Array<PostsType>;
  newPostText: string;
  profile: ProfileType | null;
};

export type DialogPageType = {
  dialogs: Array<DialogsType>;
  messages: Array<MessagesType>;
  newMessageBody: string;
};

export type SidebarType = {};

// export type StoreType = {
//   _state: StatePropsType;
//   updateNewPostText: (newText: string) => void;
//   addPost: (postMessage: string) => void;
//   _rerenderEntireTree: () => void;
//   subscribe: (observer: () => void) => void;
//   getState: () => StatePropsType;
//   dispatch: (action: ActionsTypes) => void;
// };

export type ActionsTypes =
  | ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof updateNewPostTextActionCreator>
  | ReturnType<typeof updateNewMessageBodyCreator>
  | ReturnType<typeof sendMessageCreator>
  | ReturnType<typeof setUserProfile>;

// export const store: StoreType = {
//   _state: {
//     profilePage: {
//       posts: [
//         { id: v1(), message: "Hi, how are you?", likesCount: 6 },
//         { id: v1(), message: "It's my first post", likesCount: 23 },
//       ],
//       newPostText: "it-kamasutra.com",
//     },
//     dialogsPage: {
//       dialogs: [
//         { id: v1(), name: "Dimych" },
//         { id: v1(), name: "Andrew" },
//         { id: v1(), name: "Sveta" },
//         { id: v1(), name: "Sasha" },
//         { id: v1(), name: "Victor" },
//         { id: v1(), name: "Valera" },
//       ],
//       messages: [
//         { id: v1(), message: "Hi" },
//         { id: v1(), message: "How is your it-kamasutra" },
//         { id: v1(), message: "Yo" },
//         { id: v1(), message: "yooo" },
//         { id: v1(), message: "hey" },
//         { id: v1(), message: "ky" },
//       ],
//       newMessageBody: "",
//     },
//     sidebar: {},
//   },
//   updateNewPostText(newText: string) {
//     this._state.profilePage.newPostText = newText;
//     this._rerenderEntireTree();
//   },
//   addPost(postMessage: string) {
//     const newPost: PostsType = {
//       id: v1(),
//       message: postMessage,
//       likesCount: 0,
//     };
//     this._state.profilePage.posts.push(newPost);
//     this._state.profilePage.newPostText = "";
//     this._rerenderEntireTree();
//   },
//   _rerenderEntireTree() {
//     console.log("State changed");
//   },
//   subscribe(observer) {
//     this._rerenderEntireTree = observer;
//   },
//   getState() {
//     return this._state;
//   },
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//     this._rerenderEntireTree();
//   },
// };
// store - OOP
