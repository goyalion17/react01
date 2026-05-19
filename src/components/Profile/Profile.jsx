import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
  return (
    <div className={s.profile}>
      <div>
        <img src="https://picsum.photos/seed/banner/900/200" alt="Profile banner" />
      </div>
      <div>
        <img src="https://picsum.photos/seed/avatar/150/150" alt="User avatar" />
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
