import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { Posts } from "../../../index";

type MyPostsPropsType = {
  posts: Array<Posts>;
};

export const MyPosts = (props: MyPostsPropsType) => {
  const postsElements = props.posts.map((p) => {
    return <Post message={p.message} likeCount={p.likesCount} id={p.id} />;
  });
  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
