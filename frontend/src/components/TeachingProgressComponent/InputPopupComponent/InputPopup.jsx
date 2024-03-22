import React from "react";

import "./InputPopup.css";

function InputPopup({
  handleDisplay,
  course,
  courseOnChange,
  sem_sec,
  sem_secOnChange,
  subject,
  subjectOnChange,
  scheduled_classes,
  scheduled_classesOnChange,
  held_classes,
  held_classesOnChange,
  handlePopupSubmit,
  pointsOnChange,
  points,
}) {
  return (
    <div className=" animate__animated animate__fadeIn input_popup_container">
      <div className="input_popup">
        <h3
          onClick={handleDisplay}
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
            <input
              type="text"
              placeholder="Course"
              value={course}
              onChange={courseOnChange}
            />
            <input
              type="text"
              placeholder="Section & Semester"
              value={sem_sec}
              onChange={sem_secOnChange}
            />
          </div>
          <input
            type="text"
            placeholder="Name of Subject"
            value={subject}
            onChange={subjectOnChange}
          />
          <div className="two_inps">
            <input
              type="number"
              placeholder="No. of Schedules Classes"
              value={scheduled_classes}
              onChange={scheduled_classesOnChange}
            />
            <input
              type="number"
              placeholder="No. of Actually held Classes"
              value={held_classes}
              onChange={held_classesOnChange}
            />
          </div>
          <div className="two_inps">
            <input
              type="text"
              placeholder="Points Earned (Average)"
              value={points}
              onChange={pointsOnChange}
            />
          </div>
          <div className="form_btn">
            <button onClick={handlePopupSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InputPopup;
