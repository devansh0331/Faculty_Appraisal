import React, { useContext, useEffect } from "react";
import "./Topbar.css";
import logo from "../../assets/logo/BIT_Logo.png";
import { GrUserManager } from "react-icons/gr";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";

function Topbar() {
  const { setUserInfo, userInfo } = useContext(UserContext);

  console.log(userInfo);

  useEffect(() => {
    try {
      fetch("http://localhost:8000/profile", {
        credentials: "include",
      }).then((res) => res.json().then((info) => setUserInfo(info)));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {userInfo && (
        <div className="animate__animated animate__fadeIn topbar">
          <div className="topbar_left">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="topbar_center">
            <h2>BHILAI INSTITUE OF TECHNOLOGY, DURG</h2>
            <br />
            <p>Self-Appraisal by Faculty</p>
          </div>
          <div className="topbar_right">
            {userInfo.name ? (
              <>
                <GrUserManager /> &nbsp;
                <span>{userInfo.name}</span>{" "}
              </>
            ) : (
              <span>
                <GrUserManager style={{ fontSize: "2.5rem" }} />
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Topbar;
