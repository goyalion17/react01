import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./componets/Header/Header";
import Profile from "./componets/Profile/Profile";
import Navbar from "./componets/Nav/Nav";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
