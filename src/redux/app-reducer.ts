import { AppThunk } from "./store";
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

type InitializedType = {
  initialized: boolean;
};

let initialState: InitializedType = {
  initialized: false,
};

export type AuthActionsTypes = ReturnType<typeof initializedSuccess>;

export const appReducer = (
  state: InitializedType = initialState,
  action: AuthActionsTypes
): InitializedType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = (): AppThunk => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};
