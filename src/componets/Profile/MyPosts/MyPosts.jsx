import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you" likeCount="15"/>
        <Post message="It's my first post" likeCount="27" />
      </div>
    </div>
  );
};

export default MyPosts;
