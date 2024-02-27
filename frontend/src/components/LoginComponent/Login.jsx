import React, { useState } from "react";

import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [facultyID, setFacultyID] = useState("");

  return (
    <div className="container">
      <div className="sign_in">
        <div className="animate__animated animate__slideInDown sign_in_left">
          <h1>Welcome Back</h1>
        </div>
        <div className="animate__animated animate__slideInUp sign_in_right">
          <div className="sign_in_form">
            <h1>Sign In</h1>
            <form action="">
              <input
                type="text"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter your Password"
                value={facultyID}
                onChange={(e) => setFacultyID(e.target.value)}
              />
              <div className="sign_up_btn">
                <button>Sign In</button>
              </div>
              <div className="">
                <p style={{ textAlign: "center" }}>
                  New User?{" "}
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "var(--color_contrast)",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
