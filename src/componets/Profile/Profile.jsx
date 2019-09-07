import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUJJdBjklbIoKWM6Ee5KXSjBB7yQcekq8xe2DASATckE28xOt5A"></img>
      </div>
      <div>
        <img src="https://photostocky.ru/wp-content/uploads/2019/02/krutye-foto-i-kartinki-v-vk-14.jpg"></img>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
