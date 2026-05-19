import s from './Post.module.css';

const Post = ({ message, likeCount }) => {
  return (
    <div className={s.item}>
      <img src="https://picsum.photos/seed/post/60/60" alt="Post avatar" />
      {message}
      <div>{likeCount} &#9829;</div>
    </div>
  );
};

export default Post;
