import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./componets/Header";
import Profile from "./componets/Profile";
import Navbar from "./componets/Nav";

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
