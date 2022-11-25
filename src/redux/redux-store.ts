import { applyMiddleware, combineReducers, createStore } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";
import thunkMiddleware, { ThunkDispatch } from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootActionsTypes } from "./store";

export type AppStateType = ReturnType<typeof rootReducer>;

let rootReducer = combineReducers({
  profileReducer,
  dialogsReducer,
  sidebarReducer,
  usersReducer,
  authReducer,
  form: formReducer,
});

export type StoreReduxType = typeof store;

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppDispatch = ThunkDispatch<
  AppStateType,
  unknown,
  RootActionsTypes
>;
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
//@ts-ignore
window.store = store;
