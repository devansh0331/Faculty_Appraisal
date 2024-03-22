import React from "react";

import "./Home.css";
import HomeCard from "./HomeCardComponent/HomeCard";
import { RxDashboard } from "react-icons/rx";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";



function Home() {
  return (
    <div className="container">
      <div className="animate__animated animate__slideInDown left_circle"></div>
      <div className="animate__animated animate__slideInUp right_circle"></div>
      <div className="home">
        <div className="animate__animated animate__fadeIn home_objective">
          <h3>
            <BiDetail /> &nbsp;Objective
          </h3>
          <br />
          <p>
            To provide an opportunity for the faculty for self-evaluation as a
            part of continuing professional development thereby contributing to
            the achievement of Institute’s mission.
          </p>
        </div>
        <div className="animate__animated animate__fadeIn home_dashboard">
          <h3>
            <RxDashboard /> &nbsp;Dashboard
          </h3>
          <div className="home_dashboard_cards">
            <Link to="/teaching-progress">
              <HomeCard />
            </Link>
            <a href="">
              <HomeCard />
            </a>
            <a href="">
              <HomeCard />
            </a>
            <a href="">
              <HomeCard />
            </a>
            <a href="">
              <HomeCard />
            </a>
            <a href="">
              <HomeCard />
            </a>
            <a href="">
              <HomeCard />
            </a>
            <a href="">
              <HomeCard />
            </a>

            {/* <HomeCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
