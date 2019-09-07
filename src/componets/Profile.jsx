import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUJJdBjklbIoKWM6Ee5KXSjBB7yQcekq8xe2DASATckE28xOt5A"></img>
      </div>
      <div>
        <img src="https://photostocky.ru/wp-content/uploads/2019/02/krutye-foto-i-kartinki-v-vk-14.jpg"></img>
      </div>
      <div>
        My posts
        <div className="posts">
          New post
          <div className="item">post1</div>
          <div className="item">post2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
