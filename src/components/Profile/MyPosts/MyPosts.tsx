import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { v1 } from "uuid";

export const MyPosts = () => {
  let postData = [
    { id: v1(), message: "Hi, how are you?", likesCount: 6 },
    { id: v1(), message: "It's my first post", likesCount: 23 },
  ];

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
      <div className={s.posts}>
        <Post
          message={postData[0].message}
          likeCount={postData[0].likesCount}
        />
        <Post
          message={postData[1].message}
          likeCount={postData[1].likesCount}
        />
      </div>
    </div>
  );
};
