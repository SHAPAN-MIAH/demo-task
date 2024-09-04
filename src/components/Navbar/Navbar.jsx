import "./Navbar.css";
import { GoArrowRight } from "react-icons/go";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar_container">
          <img src="Logo.png" alt="" />
          <nav className="nav_menu">
            <ul className="menu_lists">
              <li>Home</li>
              <li>Case Studies</li>
              <li>Services</li>
              <li>About</li>
              <li>Reviews</li>
              <li>Contact Us <GoArrowRight /></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
