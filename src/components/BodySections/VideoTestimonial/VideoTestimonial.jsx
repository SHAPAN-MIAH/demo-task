import React from "react";
import "./VideoTestimonial.css";
import videoBanner from "../../../assets/images/tesimonialVideo (1).png";
import videoBanner2 from "../../../assets/images/tesimonialVideo (2).png";
import videoBanner3 from "../../../assets/images/Video.png";
import userImg from "../../../assets/images/98bb2d7d32e20c3578b2757f37ff5b7a.jpeg";
import { FaStar } from "react-icons/fa6";

const VideoTestimonial = () => {
  return (
    <>
      <div className="video_testimonial_section">
        <div className="container">
          <div className="video_testimonial_heading">
            <span>VIDEO TESTIMONIAL</span>
            <h2>Let's see what our students say</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              commodi quia ipsam omnis <br />
              officia voluptatibus minus labore beatae temporibus tempora!{" "}
              <br />
              officia voluptatibus minus labore beatae{" "}
            </p>
          </div>

          <div className="video_testimonial_container">
            <div className="video_testimonial_content">
              <img src={videoBanner} alt="" />
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  expedita earum laboriosam? Earum neque iure tenetur laudantium
                  veniam. Debitis et quidem nisi quibusdam rerum quisquam nulla,
                  eum voluptatum.
                </p>
              </div>
              <div className="ratings">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="student">
                <img src={userImg} alt="" />
                <div>
                  <h5>Lisa Dowen</h5>
                  <small>Student</small>
                </div>
              </div>
            </div>
            <div className="video_testimonial_content">
              <img src={videoBanner2} alt="" />
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  expedita earum laboriosam? Earum neque iure tenetur laudantium
                  veniam. Debitis et quidem nisi quibusdam rerum quisquam nulla,
                  eum voluptatum.
                </p>
              </div>
              <div className="ratings">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="student">
                <img src={userImg} alt="" />
                <div>
                  <h5>Lisa Dowen</h5>
                  <small>Student</small>
                </div>
              </div>
            </div>
            <div className="video_testimonial_content">
              <img src={videoBanner3} alt="" />
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  expedita earum laboriosam? Earum neque iure tenetur laudantium
                  veniam. Debitis et quidem nisi quibusdam rerum quisquam nulla,
                  eum voluptatum.
                </p>
              </div>
              <div className="ratings">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="student">
                <img src={userImg} alt="" />
                <div>
                  <h5>Lisa Dowen</h5>
                  <small>Student</small>
                </div>
              </div>
            </div>
          </div>

          <button>Load More</button>
        </div>
      </div>
    </>
  );
};

export default VideoTestimonial;
