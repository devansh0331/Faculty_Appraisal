import React from "react";

import "./InputPopup.css";

function InputPopup(props) {
  return (
    <div className=" animate__animated animate__fadeIn input_popup_container">
      <div className="input_popup">
        <h3
          onClick={props.handleDisplay}
          style={{
            textAlign: "right",
            cursor: "pointer",
            width: "fit-content",
          }}
        >
          X
        </h3>
        <h3 style={{ textAlign: "center" }}>Workload </h3>
        <form action="">
          <div className="two_inps">
            <input type="text" placeholder="Course" />
            <input type="text" placeholder="Section & Semester" />
          </div>
          <input type="text" placeholder="Name of Subject" />
          <div className="two_inps">
            <input type="text" placeholder="No. of Schedules Classes" />
            <input type="text" placeholder="No. of Actually held Classes" />
          </div>
          <div className="two_inps">
            <input type="text" placeholder="Points Earned (Average)" />
          </div>
          <div className="form_btn">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InputPopup;
