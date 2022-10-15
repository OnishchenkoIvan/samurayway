import React, { ChangeEvent } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { PostsType } from "../../../redux/store";

type MyPostsPropsType = {
  posts: Array<PostsType>;
  newPostText: string;
  handleAddPost: (postMessage: string) => void;
  onPostChange: (value: string) => void;
};

export const MyPosts = ({
  handleAddPost,
  posts,
  newPostText,
  onPostChange,
}: MyPostsPropsType) => {
  const postsElements = posts.map((p) => {
    return (
      <Post
        key={p.id}
        message={p.message}
        likesCount={p.likesCount}
        id={p.id}
      />
    );
  });

  let addPost = () => {
    handleAddPost(newPostText);
  };

  let onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onPostChange(e.currentTarget.value);
  };

  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea onChange={onChange} value={newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
