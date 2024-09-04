import React from "react";
import img1 from "../../../assets/images/Group 4.png";
import img2 from "../../../assets/images/Group 5.png";
import img3 from "../../../assets/images/Group 6.png";
import img4 from "../../../assets/images/Group 7.png";
import img5 from "../../../assets/images/Group 8.png";
import img6 from "../../../assets/images/Group 9.png";

import icon from "../../../assets/images/Group (2).png";
import icon2 from "../../../assets/images/Group (1).png";
import icon3 from "../../../assets/images/Group.png";

import "./TrustBy.css";

const TrustBy = () => {
  return (
    <>
      <div className="trust_by_section">
        <div className="trust_by_heading">
          <div className="container">
            <div className="trust_by_content_container">
              <h2>Trusted By</h2>
              <div className="trust_by_content">
                <img width={110} src={img2} alt="" />
              </div>
              <div className="trust_by_content">
                <img width={120} src={img5} alt="" />
              </div>
              <div className="trust_by_content">
                <img width={160} src={img3} alt="" />
              </div>
              <div className="trust_by_content">
                <img width={90} src={img1} alt="" />
              </div>
              <div className="trust_by_content">
                <img width={90} src={img4} alt="" />
              </div>

              <div className="trust_by_content">
                <img width={90} src={img6} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="trust_by_card_content_container">
            <div className="trust_by_card_content">
              <img src={icon} alt="" />
              <div>
                <h4>Self-Expression</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                  ad consequatur eaque dolorum aliquam magnam dicta, voluptatem
                  repellendus mollitia deserunt minima iusto at soluta explicabo
                  laboriosam vel odit, eius doloribus.
                </p>
              </div>
            </div>
            <div className="trust_by_card_content">
              <img src={icon2} alt="" />
              <div>
                <h4>Self-Expression</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                  ad consequatur eaque dolorum aliquam magnam dicta, voluptatem
                  repellendus mollitia deserunt minima iusto at soluta explicabo
                  laboriosam vel odit, eius doloribus.
                </p>
              </div>
            </div>
            <div className="trust_by_card_content">
              <img src={icon3} alt="" />
              <div>
                <h4>Self-Expression</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                  ad consequatur eaque dolorum aliquam magnam dicta, voluptatem
                  repellendus mollitia deserunt minima iusto at soluta explicabo
                  laboriosam vel odit, eius doloribus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustBy;
