import {
  addPostActionCreator,
  setStatus,
  setUserProfile,
} from "./profile-reducer";
import { sendMessageCreator } from "./dialogs-reducer";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./redux-store";
import { UsersActionsTypes } from "./users-reducer";
import { AuthActionsTypes } from "./auth-reducer";

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

export type HeaderLoginType = {
  id: string | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

export type ProfilePageType = {
  posts: Array<PostsType>;
  // newPostText: string;
  profile: ProfileType | null;
  status: string;
};

export type DialogPageType = {
  dialogs: Array<DialogsType>;
  messages: Array<MessagesType>;
};

export type SidebarType = {};

export type ProfileActionsTypes =
  | ReturnType<typeof addPostActionCreator>
  // | ReturnType<typeof updateNewPostTextActionCreator>
  // | ReturnType<typeof updateNewMessageBodyCreator>
  | ReturnType<typeof sendMessageCreator>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>;

export type RootActionsTypes =
  | ProfileActionsTypes
  | UsersActionsTypes
  | AuthActionsTypes;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  RootActionsTypes
>;
