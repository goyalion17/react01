import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

  debugger;

  return (
    <div className={s.item}>
      <img
        src="https://scontent.cdninstagram.com/vp/b5489faa4aed0e5e7e593c61cae85fab/5DFB53F9/t51.2885-15/e35/c17.0.720.720a/s480x480/66500457_1372779469567089_2201974040794807856_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com"
        alt=""/>
      { props.message }
      <div>{ props.likeCount } &#9829;</div>
    </div>
  );
};

export default Post;
