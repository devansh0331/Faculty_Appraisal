import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./HomeComponent/Home";
import SignUp from "./SignUpComponent/SignUp";
import Login from "./LoginComponent/Login";

function Main() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default Main;
