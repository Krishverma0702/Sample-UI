import React from "react";
import "../Components/Navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <nav>
        <div id="nav-items">
          <img src="./public/images/brand_logo.png" alt="logo" />
          <ul>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#location">Location</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button className="login-btn">Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
