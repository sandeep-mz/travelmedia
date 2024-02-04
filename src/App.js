import React from "react";

import "../src/App.css";

import Home from "./Pages/Home";
import PostDetail from "./Pages/PostDetail";
import Navbar from "./Components/Navbar";
import UserDetail from "./Pages/UserDetail";
import Notification from "./Pages/Notification";
import Bookmark from "./Pages/Bookmark";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-gray-100 h-screen w-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/detail/:id" element={<PostDetail />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/user/details" element={<UserDetail />} />
      </Routes>
    </div>
  );
};

export default App;