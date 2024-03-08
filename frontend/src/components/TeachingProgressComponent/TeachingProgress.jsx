import React, { useState } from "react";
import "./TeachingProgress.css";

import { GiTeacher } from "react-icons/gi";
import InputPopup from "./InputPopupComponent/InputPopup";

function TeachingProgress() {
  const [bool, setBool] = useState(false);

  const handleDisplay = (e) => {
    e.preventDefault();
    setBool(!bool);
  };

  return (
    <div className="scrolling_container">
      <div
        className={
          bool ? "disp_block" : " animate__animated animate__fadeOut disp_none"
        }
      >
        <InputPopup handleDisplay={handleDisplay} />
      </div>
      <div className="animate__animated animate__slideInDown left_circle"></div>
      <div className="animate__animated animate__slideInUp right_circle"></div>
      <div className="tp">
        <h1 className="centerHeading">
          <GiTeacher /> &nbsp;Teaching Progress{" "}
        </h1>

        <div className="form_section">
          <h3>
            [A] Workload - Details of subjects taken per semester (Odd & Even):
          </h3>
          <br />
          <table>
            <tr>
              <th>Course</th>
              <th>Sem. & Sec.</th>
              <th>
                Name of Suject <br /> (Theory/Practical)
              </th>
              <th>
                No. of <br /> Scheduled classes
              </th>
              <th>
                No. of <br /> Actually held classes
              </th>
              <th>
                Points Earned <br /> (Average)
              </th>
              <th>Action Buttons</th>
            </tr>

            <tr>
              <td>Computer Science and Engineering</td>
              <td>3, B</td>
              <td>Theory of Computation</td>
              <td>40</td>
              <td>38</td>
              <td>2.5</td>
            </tr>

            <tr>
              <td colspan="7  ">
                <button onClick={handleDisplay}>+ Add Row</button>
              </td>
            </tr>
          </table>
        </div>
        <div className="form_section">
          <h3>[B] No. of Student Projects Undertaken:</h3>
          <form action="">
            <div className="two_inps">
              <input type="text" name="" id="" placeholder="B.Tech" />
              <input type="text" name="" id="" placeholder="M.Tech" />
            </div>
            <div className="two_inps">
              <input type="text" name="" id="" placeholder="MCA / MBA" />
              <input
                type="text"
                name=""
                id=""
                placeholder="No. of Paper Published by UG/PG Students"
              />
            </div>
            {/* <div className="form_btn">
              <button>Submit</button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default TeachingProgress;
