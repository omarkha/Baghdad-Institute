import React from "react";
import "../../styles/employee.css";
const EmployeeEntrepreneur = () => {
  return (
    <div>
      <div className="employee-wrapper">
        <div className="container">
          <h1 className="mb-5">Arabic Entrepreneurship Teacher</h1>
          <div className="employee">
            <h3>You You Will Be Doing</h3>
            <p className="mission">
              Creating an Entrepreneurship course. The course has to cover all
              the essential topics to provide a student with little knowledge of
              entrepreneurship with enough knowledge to start their own
              business. The course should also provide direction to students who
              want to further develop their entrepreneurial capabilities.
            </p>
            <h5 className="mt-5">Responsibilities</h5>
            <ul className="responsibilies">
              <li>Desinging & Developing Curriculum</li>
              <li>Creating engaging and informative course materials</li>
              <li>
                Teaching Recorded Zoom Lectures consisting of Arabic students
              </li>
              <li>Assigning Mock Up Business Projects</li>
              <li>Creating periodic quizzes to assess learning progress</li>
              <li>Collaborating with the project team</li>
            </ul>
            <h5 className="mt-5">Qualifications</h5>
            <ul className="qualifications">
              <li>
                A minimum of a Bachelors degree in entrepreneurship or related
                field
              </li>
              <li>Owner of at least one business</li>
              <li>Born in Iraq and fluent in Arabic</li>
              <li>Has over 4 years of successful business experience</li>
            </ul>
            <h5 className="mt-5">Benefits</h5>
            <div className="benefits">
              <ul>
                <li>$120,000 contract paid weekly</li>
                <li>Paid Vacation</li>
                <li>Post-project opportunities</li>
                <li>Passion for education</li>
                <li>$6,000 Bonus on the first day of teaching</li>
              </ul>
            </div>
          </div>
          <div className="details">
            <h5>details</h5>
            <p>
              The Zoom class room will consist of 20 student. <br />
              <br />
              The meeting of the project minimum requirements will be assessed
              by AI.
              <br />
              <br />
              students will do presentations and weekly standups in the recorded
              zoom class.
              <br />
              <br />
              all students are required to have modern computer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeEntrepreneur;
