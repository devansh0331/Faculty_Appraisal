import React from "react";

import "./Home.css";
import HomeCard from "./HomeCardComponent/HomeCard";
import { RxDashboard } from "react-icons/rx";
import { BiDetail } from "react-icons/bi";

function Home() {
  return (
    <div className="container">
      <div className="animate__animated animate__slideInDown home_leftCircle"></div>
      <div className="animate__animated animate__slideInUp home_rightCircle"></div>
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
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            {/* <HomeCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
