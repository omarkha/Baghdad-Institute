import React from "react";
import "../../styles/employee.css";
const EmployeeProjectManager = () => {
  return (
    <div>
      <div className="employee-wrapper">
        <div className="container">
          <h1 className="mb-5">Project Manager</h1>
          <div className="employee">
            <h3>You You Will Be Doing</h3>
            <p className="mission">
              We are looking for a project manager who will work with our
              academic director, instructors, UX/UI designer, software engineer,
              graphics designer and other members to facilitate the development
              of our new online entrepreneurial academy. The ideal candidate
              should have experience in managing projects from inception to
              completion, ensuring that they are delivered on time and within
              budget. They should also be able to manage project risks and
              issues, communicate effectively with stakeholders, and ensure that
              project goals are met.
            </p>
            <h5 className="mt-5">Responsibilities</h5>
            <ul className="responsibilies">
              <li>Manage projects from inception to completion.</li>
              <li>
                Ensure that projects are delivered on time and within budget.
              </li>
              <li>Manage project risks and issues.</li>
              <li>Communicate effectively with stakeholders.</li>

              <li>Ensure that project goals are met.</li>
            </ul>
            <h5 className="mt-5">Qualifications</h5>
            <ul className="qualifications">
              <li>
                Bachelor’s degree in Business Administration or related field.
              </li>
              <li>3+ years of experience in project management.</li>
              <li>
                Experience in managing projects from inception to completion.
              </li>
              <li>Experience in managing project risks and issues.</li>
              <li>
                Experience in communicating effectively with stakeholders.
              </li>
              <li>Excellent problem-solving skills.</li>
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

export default EmployeeProjectManager;
