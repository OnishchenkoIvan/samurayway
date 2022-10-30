const SET_USERS_DATA = "SET_USERS_DATA";

export type InitialStateType = {
  id: string | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

let initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

type ActionsTypes = ReturnType<typeof setAuthUserData>;

export const authReducer = (
  state: InitialStateType = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case SET_USERS_DATA:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (id: string, email: string, login: string) =>
  ({ type: SET_USERS_DATA, data: { id, email, login } } as const);
