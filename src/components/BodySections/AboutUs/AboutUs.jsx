import React from "react";
import img from "../../../assets/images/Image.png";
import { GoArrowRight } from "react-icons/go";
import './AboutUs.css'

const AboutUs = () => {
  return (
    <>
      <div className="aboutUs_section">
        <div className="container">
          <div className="aboutUs_content_container">
            <div className="aboutUs_gallery">
              <img src={img} alt="" />
            </div>
            <div className="aboutUs_content">
              <span>About Us</span>
              <h2>Who we are</h2>

              <p>
                One of the most technologically powerful and dynamic countries,
                USA is the largest & most dominant economy globally. Sectors
                that empower this world’s most productive economy include
                Healthcare, Technology, Construction, Retail, Manufacturing,
                Finance & Insurance and Real Estate. Top jobs with high
                remuneration prospects for international students include
                Medicine, Computer & Information Systems Managers, Architectural
                & Engineering Managers and Marketing & Financial Managers.
                Standard of living in the USA is among the highest in the world
                with high per capita income. This nation performs very well in
                many measures of well-being such as income & wealth, health
                status, jobs and earnings, education & skills and environmental
                quality.
              </p>

              <button>
                Learn More <GoArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
