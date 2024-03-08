import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./HomeComponent/Home";
import SignUp from "./SignUpComponent/SignUp";
import Login from "./LoginComponent/Login";
import Topbar from "./TopbarComponent/Topbar";
import TeachingProgress from "./TeachingProgressComponent/TeachingProgress";

function Main() {
  return (
    <div>
      <Topbar />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/teaching-progress" element={<TeachingProgress />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Main;
