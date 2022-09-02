import React from "react";
import s from "./Post.module.css";

type Post = {
  id: string;
  message: string;
  likeCount: number;
};

export const Post = (props: Post) => {
  return (
    <div className={s.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkpclgdZQ3ZHBh6xTt4wlROP30NE_GY7MdVw&usqp=CAU"
        alt={"avatar"}
      />{" "}
      {props.message}
      <div>
        <span>like {props.likeCount}</span>
      </div>
    </div>
  );
};
