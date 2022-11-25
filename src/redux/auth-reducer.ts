import { AppThunk, HeaderLoginType } from "./store";
import { authAPI } from "../api/api";

const SET_USERS_DATA = "SET_USERS_DATA";

let initialState: HeaderLoginType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

export type AuthActionsTypes = ReturnType<typeof setAuthUserData>;

export const authReducer = (
  state: HeaderLoginType = initialState,
  action: AuthActionsTypes
): HeaderLoginType => {
  switch (action.type) {
    case SET_USERS_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (
  id: string,
  email: string,
  login: string,
  isAuth: boolean
) => ({ type: SET_USERS_DATA, payload: { id, email, login, isAuth } } as const);

export const getAuthUserData =
  (): AppThunk => (dispatch: (callback: AuthActionsTypes) => void) => {
    return authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };

export const login =
  (email: string, password: string, rememberMe: boolean): AppThunk =>
  (dispatch) => {
    authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      }
    });
  };

export const logout =
  (): AppThunk => (dispatch: (callback: AuthActionsTypes) => void) => {
    authAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData("", "", "", false));
      }
    });
  };
