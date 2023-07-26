import React, { useState } from "react";
import "./navbar.css"; // TO CHANGE NETFLIX NAME TO FLIXXIT.
import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  const navigate = useNavigate();
  // Applying useState for navbar so that on scrolling down it appears black  and on top remains transparent
  const [scroll, setScroll] = useState(false);
  window.onscroll = () => {
    setScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  console.log(scroll);
  // Ends here
  const handleClick = async () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className={scroll ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <span className="image">FLIXXIT</span>
          <Link to="/" className="link">
            {" "}
            <span className="navbar-Link">Home</span>
          </Link>

          <Link to="/series" className="link">
            {""}
            <span className="navbar-Link"> Series </span>
          </Link>
          <Link to="/movies" className="link">
            {" "}
            <span className="navbar-Link">Movies</span>
          </Link>
          <Link to="/newandpopular" className="link">
            {" "}
            <span>New and Popular</span>{" "}
          </Link>
          <Link to="/mylist" className="link">
            {" "}
            <span>My List</span>{" "}
          </Link>
        </div>
        <div className="right">
          <div className={`search ${showSearch ? "show-search" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) {
                  setShowSearch(false);
                }
              }}
            >
              <FaSearch className="icons" />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>

          {/* <IoNotifications className="icons" /> */}

          <div className="menu">
            <IoMdArrowDropdown className="icons" />

            {/* <h2>
                Profile
                <CgProfile className="profile" />
              </h2> */}
            <div className="options">
              <button onClick={handleClick} className="power">
                <BiPowerOff className="icons-bi" />
                LogOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
