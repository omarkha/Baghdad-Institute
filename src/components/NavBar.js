import React from "react";
import emblem from "../media/iraq.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-bs-controls="navbarTogglerDemo03"
          aria-bs-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <div
            className="emblem"
            style={{ backgroundImage: `url(${emblem})` }}
          />
          <div className="brand">
            <div>
              <h1 className="brandnamear">اكاديمية البرق لريادة الاعمال</h1>

              <h1 className="brandname">Al-Barq Entrepreneurial Academy</h1>
              <h1 className="tagline">نبادر ونبتكر لعراق عظيم</h1>
            </div>
          </div>
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Courses & Programs
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Student Experience
              </a>
            </li>
            <li>
              <button className="nav-cta-btn">Enroll</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
