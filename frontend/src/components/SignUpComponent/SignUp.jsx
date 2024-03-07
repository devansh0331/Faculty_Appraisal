import React, { useState } from "react";

import "./SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  // USE_STATE VARIABLES
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [qualification, setQualification] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [phnNumber, setPhnNumber] = useState("");
  const [email, setEmail] = useState("");
  const [facultyID, setFacultyID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormDate();
  };

  return (
    <div className="container">
      <div className="sign_up">
        <div className="animate__animated animate__slideInDown sign_up_left">
          <div className="sign_up_form">
            <h1>Please fill the following details</h1>
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="two_inps">
                <input
                  type="text"
                  placeholder="Designation"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </div>
              <div className="two_inps">
                <input
                  type="text"
                  placeholder="Highest Qualification (with year)"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Area of Specialization"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                />
              </div>
              <div className="two_inps">
                <input
                  type="date"
                  placeholder="Date of joining institute"
                  value={joiningDate}
                  onChange={(e) => setJoiningDate(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Phone No./ Mobile"
                  value={phnNumber}
                  onChange={(e) => setPhnNumber(e.target.value)}
                />
              </div>
              <div className="two_inps">
                <input
                  type="text"
                  placeholder="Email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="5-Digit Faculty ID"
                  value={facultyID}
                  onChange={(e) => setFacultyID(e.target.facultyID)}
                />
              </div>
              <div className="sign_up_btn">
                <button>Sign Up</button>
              </div>
              <div className="">
                <p style={{ textAlign: "center" }}>
                  Already have an account?{" "}
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "var(--color_contrast)",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                    to="/"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="animate__animated animate__slideInUp sign_up_right">
          <h1>Join with us</h1>
        </div>
      </div>
    </div>
  );
}

export default SignUp;