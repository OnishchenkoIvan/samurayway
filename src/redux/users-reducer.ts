const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

type UserLocationType = {
  city: string;
  county: string;
};
type UserPhotos = {
  small: string;
  large: string;
};

export type UserType = {
  id: string;
  photos: UserPhotos;
  followed: boolean;
  name: string;
  status: string;
  location: UserLocationType;
};

export type InitialStateType = {
  users: UserType[];
};

let initialState: InitialStateType = {
  users: [],
};

type ActionsTypes =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>;

export const usersReducer = (
  state: InitialStateType = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export const followAC = (userId: string) => ({ type: FOLLOW, userId } as const);
export const unfollowAC = (userId: string) =>
  ({ type: UNFOLLOW, userId } as const);
export const setUsersAC = (users: UserType[]) =>
  ({ type: SET_USERS, users } as const);
