import React, { useEffect, useState } from "react";
import "./TeachingProgress.css";

import { GiTeacher } from "react-icons/gi";
import InputPopup from "./InputPopupComponent/InputPopup";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";

import { Toaster, toast } from "react-hot-toast";

function TeachingProgress() {
  const [bool, setBool] = useState(false);

  const [course, setCourse] = useState("");
  const [sem_sec, setSem_Sec] = useState("");
  const [subject, setSubject] = useState("");
  const [scheduled_classes, setScheduled_classes] = useState("");
  const [held_classes, setHeld_classes] = useState("");
  const [points, setPoints] = useState(0);
  const [count, setCount] = useState(0);
  // const [points, setPoints] = useState("");

  const [workload, setWorkload] = useState([]);

  // useEffect for getting data from localStorage
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setWorkload(items);
    }
  }, []);

  // For closing InputPopup Component
  const handleClose = (e) => {
    e.preventDefault();
    setBool(!bool);
  };

  // For opening InputPopup Component and setting values in it
  const handleDisplay = (e) => {
    e.preventDefault();
    setWorkload([
      ...workload,
      {
        count: 0,
        course: "",
        sem_sec: "",
        subject: "",
        scheduled_classes: "",
        held_classes: "",
        points: "",
      },
    ]);
    setBool(!bool);
  };

  //
  const handlePopupSubmit = (e) => {
    e.preventDefault();
    console.log(workload.length);
    const List = [...workload];
    if (
      course == "" ||
      sem_sec == "" ||
      subject == "" ||
      scheduled_classes == "" ||
      held_classes == ""
    ) {
      toast.error("All fields are mandatory");
    } else {
      List[workload.length - 1].course = course;
      List[workload.length - 1].sem_sec = sem_sec;
      List[workload.length - 1].subject = subject;
      List[workload.length - 1].scheduled_classes = scheduled_classes;
      List[workload.length - 1].held_classes = held_classes;
      List[workload.length - 1].points =
        (parseInt(scheduled_classes) + parseInt(held_classes)) / 16;
      List[workload.length - 1].count = workload.length - 1;

      setWorkload(List);
      localStorage.setItem("items", JSON.stringify(List));
      toast.success("Data added successfully");
      setBool(!bool);
      setCourse("");
      setSem_Sec("");
      setSubject("");
      setScheduled_classes("");
      setHeld_classes("");
      setPoints(0);
    }
  };

  // Uploading data to database
  const handleUpload = (e) => {
    e.preventDefault();
  };

  return (
    <div className="scrolling_container">
      <div
        className={
          bool ? "disp_block" : " animate__animated animate__fadeOut disp_none"
        }
      >
        <InputPopup
          handleDisplay={handleClose}
          courseOnChange={(e) => setCourse(e.target.value)}
          course={course}
          sem_secOnChange={(e) => setSem_Sec(e.target.value)}
          sem_sec={sem_sec}
          subjectOnChange={(e) => setSubject(e.target.value)}
          subject={subject}
          scheduled_classesOnChange={(e) =>
            setScheduled_classes(e.target.value)
          }
          scheduled_classes={scheduled_classes}
          held_classesOnChange={(e) => {
            setHeld_classes(e.target.value);
            if (scheduled_classes != "" && held_classes != "") {
              setPoints(
                (parseInt(held_classes) + parseInt(scheduled_classes)) / 16
              );
            } else {
              setPoints(0);
            }
          }}
          held_classes={held_classes}
          pointsOnChange={(e) => {}}
          points={points}
          handlePopupSubmit={handlePopupSubmit}
        />
      </div>
      <div className="animate__animated animate__slideInDown left_circle"></div>
      <div className="animate__animated animate__slideInUp right_circle"></div>
      <div className="upload" onClick={handleUpload}>
        <IoMdCloudUpload />
      </div>
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
            {
              // workload[2] != "" &&
              workload.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.course}</td>
                    <td>{item.sem_sec}</td>
                    <td>{item.subject}</td>
                    <td>{item.scheduled_classes}</td>
                    <td>{item.held_classes}</td>
                    <td>{item.points}</td>
                    <td>
                      <div
                        classaName="action_btns"
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          cursor: "pointer",
                        }}
                      >
                        <RiDeleteBin6Line style={{ color: "red" }} />
                        <FaRegEdit style={{ color: "green" }} />
                      </div>
                    </td>
                  </tr>
                );
              })
            }

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
        <Toaster position="top-right" />
      </div>
    </div>
  );
}

export default TeachingProgress;
