import React from "react";
import "../../styles/employee.css";
const EmployeeGraphics = () => {
  return (
    <div>
      <div className="employee-wrapper">
        <div className="container">
          <h1 className="mb-5">Graphics Designer</h1>
          <div className="employee">
            <h3>You You Will Be Doing</h3>
            <p className="mission">
              Collaborating with and helping software engineers, ux designers
              and instructors with graphics design tasks to achieve project
              goals. You'll provide graphics work for the actual courses, the
              learning application, the website and other areas.
            </p>
            <h5 className="mt-5">Responsibilities</h5>
            <ul className="responsibilies">
              <li>Collaborating with instructors on Curriculum Development</li>
              <li>Faculty Recruitment and Management</li>
              <li>Quality Assessment of the Courses</li>
              <li>Helping The Academy become Accredited</li>

              <li>Contributing to the Strategic Planning of the Academy</li>
            </ul>
            <h5 className="mt-5">Qualifications</h5>
            <ul className="qualifications">
              <li>
                A master's or doctoral degree in marketing, copywriting,
                entrepreneurship, software engineering
              </li>
              <li>
                Experience teaching at the university level or have worked in
                educational institutions with a focus on online learning.
              </li>
              <li>
                Demonstrated leadership roles in academia or other relevant
                fields.
              </li>
              <li>
                Strong understanding of curriculum development principles and be
                able to design courses that align with industry standards and
                best practices.
              </li>
              <li>
                {" "}
                Comfortable using learning management systems, video
                conferencing tools, and other online educational platforms.
              </li>
            </ul>
            <h5 className="mt-5">Benefits</h5>
            <div className="benefits">
              <ul>
                <li>$100,000 contract paid weekly</li>
                <li>Paid Vacation</li>
                <li>Performance Bonuses</li>
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

export default EmployeeGraphics;
