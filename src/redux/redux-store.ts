import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";

export type AppStateType = ReturnType<typeof rootReducer>;

let rootReducer = combineReducers({
  profileReducer,
  dialogsReducer,
  sidebarReducer,
  usersReducer,
  authReducer,
});

export type StoreReduxType = typeof store;

export let store = createStore(rootReducer);

//@ts-ignore
window.store = store;
