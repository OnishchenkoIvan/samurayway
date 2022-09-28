import React, { ChangeEvent } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { ActionsTypes, addPostAc, PostsType } from "../../../redux/state";

type MyPostsPropsType = {
  posts: Array<PostsType>;
  newPostText: string;
  addPost: (postMessage: string) => void;
  changeNewTextCallback: (newText: string) => void;
  dispatch: (action: ActionsTypes) => void;
};

export const MyPosts = (props: MyPostsPropsType) => {
  const postsElements = props.posts.map((p) => {
    return <Post message={p.message} likesCount={p.likesCount} id={p.id} />;
  });

  let addPost = () => {
    props.dispatch(addPostAc(props.newPostText));
  };

  let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.changeNewTextCallback(e.currentTarget.value);
  };

  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
