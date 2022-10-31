const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

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
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<boolean | string>;
};

let initialState: InitialStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

type ActionsTypes =
  | ReturnType<typeof follow>
  | ReturnType<typeof unfollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleFollowingProgress>;

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
      return { ...state, users: [...action.users] };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }

    default:
      return state;
  }
};

export const follow = (userId: string) => ({ type: FOLLOW, userId } as const);
export const unfollow = (userId: string) =>
  ({ type: UNFOLLOW, userId } as const);
export const setUsers = (users: UserType[]) =>
  ({ type: SET_USERS, users } as const);
export const setCurrentPage = (currentPage: number) =>
  ({
    type: SET_CURRENT_PAGE,
    currentPage,
  } as const);
export const setTotalUsersCount = (count: number) =>
  ({
    type: SET_TOTAL_USERS_COUNT,
    count,
  } as const);
export const toggleIsFetching = (isFetching: boolean) =>
  ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
  } as const);
export const toggleFollowingProgress = (
  followingInProgress: boolean,
  userId: string
) =>
  ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId,
  } as const);
