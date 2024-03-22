import React, { useContext, useEffect, useState } from "react";
import "./Topbar.css";
import logo from "../../assets/logo/BIT_Logo.png";
import { GrUserManager } from "react-icons/gr";
import { UserContext } from "../../UserContext";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

function Topbar() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const navigate = useNavigate();
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

  const handleLogout = (e) => {
    e.preventDefault();
    // console.log(process.env.SERVER_URL);
    fetch("http://localhost:8000/logout", {
      method: "POST",
      credentials: "include",
    });

    setUserInfo({});
    toast.success("Logout Successful!", {
      autoClose: 2000,
    });
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

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
                <span>{userInfo.name}</span> <br />
                <p
                  style={{
                    fontSize: "1rem",
                    color: "red",
                    textAlign: "right",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </p>
              </>
            ) : (
              <span>
                <GrUserManager style={{ fontSize: "2.5rem" }} />
              </span>
            )}
          </div>
          <Toaster position="top-right" />
        </div>
      )}
    </>
  );
}

export default Topbar;
