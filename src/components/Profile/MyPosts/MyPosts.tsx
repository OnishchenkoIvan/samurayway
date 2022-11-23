import React, { FC } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { PostsType } from "../../../redux/store";
import { InjectedFormProps } from "redux-form/lib/reduxForm";
import { Field, reduxForm } from "redux-form";

type MyPostsPropsType = {
  posts: Array<PostsType>;
  handleAddPost: (postMessage: string) => void;
};

export const MyPosts = ({ handleAddPost, posts }: MyPostsPropsType) => {
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

  let onAddPost = (values: { newPostText: string }) => {
    handleAddPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const AddNewPostForm: FC<InjectedFormProps<{ newPostText: string }>> = (
  props
) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newPostText" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm<{ newPostText: string }>({
  form: "ProfileAddNewPostForm",
})(AddNewPostForm);
