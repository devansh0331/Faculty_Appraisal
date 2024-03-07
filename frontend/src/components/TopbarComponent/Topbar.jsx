import React from "react";
import "./Topbar.css";
import logo from "../../assets/logo/BIT_Logo.png";
import { GrUserManager } from "react-icons/gr";

function Topbar() {
  return (
    <div className="animate__animated animate__fadeIn topbar">
      <div className="topbar_left">
        <img src={logo} alt="" />
      </div>
      <div className="topbar_center">
        <h2>BHILAI INSTITUE OF TECHNOLOGY, DURG</h2>
        <br />
        <p>Self-Appraisal by Faculty</p>
      </div>
      <div className="topbar_right">
        <GrUserManager /> &nbsp;
        <span>JYOTI GUPTA</span>
      </div>
    </div>
  );
}

export default Topbar;
