import { HeaderLoginType } from "./store";

const SET_USERS_DATA = "SET_USERS_DATA";

let initialState: HeaderLoginType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

type ActionsTypes = ReturnType<typeof setAuthUserData>;

export const authReducer = (
  state: HeaderLoginType = initialState,
  action: ActionsTypes
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
