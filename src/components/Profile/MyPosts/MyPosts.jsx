import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const posts = [
  { id: 1, message: 'Hi, how are you', likeCount: 15 },
  { id: 2, message: "It's my first post", likeCount: 27 },
];

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <label htmlFor="new-post" className="sr-only">
          New post
        </label>
        <textarea id="new-post" cols="30" rows="10" />
        <button type="button">Add post</button>
      </div>
      <div className={s.posts}>
        {posts.map((p) => (
          <Post key={p.id} message={p.message} likeCount={p.likeCount} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
