import React, { useState } from "react";

import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = { email, password };
    const loginDoc = await fetch("http://localhost:8000/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (loginDoc.status === 200) {
      // loginDoc.json().then((userInfo) => {
      //   setCurrentUser(userInfo);
      // });

      toast.success("Login Successful!", {
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      const msg = await loginDoc.json();
      toast.error(msg);
    }
  };

  return (
    <div className="container">
      <div className="sign_in">
        <div className="animate__animated animate__slideInDown sign_in_left">
          <h1>Welcome Back</h1>
        </div>
        <div className="animate__animated animate__slideInUp sign_in_right">
          <div className="sign_in_form">
            <h1>Sign In</h1>
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
        <Toaster position="top-right" />
      </div>
    </div>
  );
}

export default Login;
