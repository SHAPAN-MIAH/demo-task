import React from "react";
import "./Showcase.css";
import { FiPhoneCall } from "react-icons/fi";
import { IoGridOutline } from "react-icons/io5";
import ellipseBg1 from "../../assets/images/Ellipse 35.png";
import ellipseBg2 from "../../assets/images/Ellipse 36.png";
import showcaseVideo from "../../assets/images/Video.png";

const Showcase = () => {
  return (
    <>
      <div className="showcase_section">
        <div className="showcase_container">
          <img width={600} className="ellipse1" src={ellipseBg1} alt="" />
          <div className="showcase_head">
            <h2>Let’s learn & gain skills</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. In at mauris sollicitudin
              phasellus <br />
              enim tellus et. Lectus mauris consequat nam leo eget.Lorem ipsum
              dolor <br />
              sit amet consectetur. In at mauris sollicitudin phasellus enim
              tellus et. <br /> Lectus mauris consequat nam leo eget.
            </p>

            <div className="showcase_btn">
              <button>
                <span>
                  <FiPhoneCall />
                </span>{" "}
                Schedule a Call
              </button>
              <button>
                <span>
                  <IoGridOutline />
                </span>{" "}
                View case studies
              </button>
            </div>
          </div>
          <img width={700} className="ellipse2" src={ellipseBg2} alt="" />
        </div>
          <div className="container videoContainer">
          <img src={showcaseVideo} alt="" />
          </div>
      </div>
    </>
  );
};

export default Showcase;
