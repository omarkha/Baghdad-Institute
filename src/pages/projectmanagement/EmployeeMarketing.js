import React from "react";
import "../../styles/employee.css";
const EmployeeMarketing = () => {
  return (
    <div>
      <div className="employee-wrapper">
        <div className="container">
          <h1 className="mb-5">Arabic Marketing Teacher</h1>
          <div className="employee">
            <h3>You You Will Be Doing</h3>
            <p className="mission">
              Creating a Marketing coure. The course has to cover all the
              essential topics that equip a student of little to no knowledge of
              marketing with the most beneficial knowledge and skills that helps
              them with entrepreneurial project. The course should also give
              students a good foundation to build their marketing skills upon
              after completing the course.
            </p>
            <h5 className="mt-5">Responsibilities</h5>
            <ul className="responsibilies">
              <li>Curriculum Development</li>
              <li>Content Creation</li>
              <li>
                Teaching Recorded Zoom Lectures consisting of Arabic students
              </li>
              <li>Assigning Portfolio Projects</li>
              <li>Creating periodic quizzes to assess learning progress</li>
              <li>Collaborating with the project team</li>
            </ul>
            <h5 className="mt-5">Qualifications</h5>
            <ul className="qualifications">
              <li>A minimum of a Bachelors degree</li>
              <li>over 4 years of marketing experience</li>
              <li>A native Arabic speaker</li>
              <li>Passion for education</li>
              <li>proficient in English</li>
            </ul>
            <h5 className="mt-5">Benefits</h5>
            <div className="benefits">
              <ul>
                <li>$90,000 contract paid weekly</li>
                <li>Paid Vacation</li>
                <li>Post-project opportunities</li>
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

export default EmployeeMarketing;
