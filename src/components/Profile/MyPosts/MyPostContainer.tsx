import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import { AppStateType, store } from "../../../redux/redux-store";
import { Dispatch } from "redux";
import { PostsType } from "../../../redux/store";

// export const MyPostContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const state = store.getState();
//
//         const handleAddPost = () => {
//           store.dispatch(
//             addPostActionCreator(state.profileReducer.newPostText)
//           );
//         };
//
//         const onPostChange = (newPostText: string) => {
//           store.dispatch(updateNewPostTextActionCreator(newPostText));
//         };
//         return (
//           <MyPosts
//             handleAddPost={handleAddPost}
//             onPostChange={onPostChange}
//             newPostText={state.profileReducer.newPostText}
//             posts={state.profileReducer.posts}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

type MapStatePropsType = {
  posts: PostsType[];
  newPostText: string;
};

type MapDispatchToPropsType = {
  onPostChange: (newPostText: string) => void;
  handleAddPost: () => void;
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    posts: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    onPostChange: (newPostText: string) => {
      dispatch(updateNewPostTextActionCreator(newPostText));
    },
    handleAddPost: () => {
      dispatch(
        addPostActionCreator(store.getState().profileReducer.newPostText)
      );
    },
  };
};

export const MyPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
