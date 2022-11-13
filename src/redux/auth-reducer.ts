import { HeaderLoginType } from "./store";
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
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (id: string, email: string, login: string) =>
  ({ type: SET_USERS_DATA, data: { id, email, login } } as const);

export const getAuthUserData =
  () => (dispatch: (callback: AuthActionsTypes) => void) => {
    return authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    });
  };
