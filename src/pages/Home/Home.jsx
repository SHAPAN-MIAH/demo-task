
import AboutUs from "../../components/BodySections/AboutUs/AboutUs";
import TrustBy from "../../components/BodySections/TrustBy/TrustBy";
import VideoTestimonial from "../../components/BodySections/VideoTestimonial/VideoTestimonial";
import Navbar from "../../components/Navbar/Navbar";
import Showcase from "../../components/Showcase/Showcase";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Showcase/>
      <TrustBy/>
      <AboutUs/>
      <VideoTestimonial/>
    </>
  );
};

export default Home;