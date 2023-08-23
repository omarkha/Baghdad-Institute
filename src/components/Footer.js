import React from "react";
import intrologo from "../media/TIB2.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="container">
          <div className="footer">
            <ul>
              <li>Admissions</li>
              <li>What You Will Learn</li>
              <li>Contact Us</li>
              <li>About TIB</li>
            </ul>
            <div className="brand">
              <div
                className="intrologo"
                style={{ backgroundImage: `url(${intrologo})` }}
              />
              <div>
                <h1 className="brandnamear text-light">معهد الثروة للاعمال</h1>
                <h1 className="brandname text-warning">
                  Al-Tharwa Institute of Business
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
