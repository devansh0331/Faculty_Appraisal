import React from "react";
import "./HomeCard.css";
import { GiTeacher } from "react-icons/gi";

function HomeCard() {
  return (
    <div className="homeCard">
      <div className="homeCard_left">
        <span>Teaching Process</span>
      </div>
      <div className="homeCard_right">
        <GiTeacher />
      </div>
    </div>
  );
}

export default HomeCard;
