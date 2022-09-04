import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { PostsType } from "../../../redux/state";

type MyPostsPropsType = {
  posts: Array<PostsType>;
  addPost: (postMessage: string) => void;
};

export const MyPosts = (props: MyPostsPropsType) => {
  const postsElements = props.posts.map((p) => {
    return <Post message={p.message} likesCount={p.likesCount} id={p.id} />;
  });

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addPost = () => {
    if (newPostElement.current) {
      props.addPost(newPostElement.current.value);
    }
  };

  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
