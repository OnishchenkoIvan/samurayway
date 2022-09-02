import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { v1 } from "uuid";

export const MyPosts = () => {
  let posts = [
    { id: v1(), message: "Hi, how are you?", likesCount: 6 },
    { id: v1(), message: "It's my first post", likesCount: 23 },
  ];

  const postsElements = posts.map((p) => {
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
