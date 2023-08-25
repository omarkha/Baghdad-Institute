import React from "react";
import "../styles/career.css";
import { Link } from "react-router-dom";
const CareersPage = () => {
  return (
    <div>
      <div className="careers-wrapper">
        <div className="container">
          <h2 className="text-light my-5">We Are Hiring</h2>
          <div className="jobs">
            <ul>
              {" "}
              <li>
                <Link to="/employee-director">Academic Director</Link>
              </li>
              <li>
                <Link to="/employee-manager">Project Manager</Link>
              </li>
              <li>
                <Link to="/employee-appdev">Software Engineer</Link>
              </li>
              <li>
                <Link to="/employee-ux">UX/UI Designer</Link>
              </li>
              <li>
                <Link to="/employee-graphics">Graphics Designer</Link>
              </li>
              <li>
                <Link to="/employee-instructional">Instructional Designer</Link>
              </li>
              <li>
                <Link to="/employee-entrepreneur">
                  Entrepreneurship instructor
                </Link>
              </li>
              <li>
                <Link to="/employee-writer">Copywriting Instructor</Link>
              </li>
              <li>
                <Link to="/employee-marketing">Marketing Instructor</Link>
              </li>
              <li>
                <Link to="/employee-software">
                  Software Engineering Instructor
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
