import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { sidebarReducer } from "./sidebar-reducer";

export type AppStateType = ReturnType<typeof rootReducer>;

let rootReducer = combineReducers({
  profileReducer,
  dialogsReducer,
  sidebarReducer,
});

export type StoreReduxType = typeof store;

export let store = createStore(rootReducer);
