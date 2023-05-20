import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <div className="nav">
      <div className="navbar container">
        <div className="logo">
          <Link className="logo" to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link to="/">
            <p>HOME</p>
          </Link>
          <p>FOOD</p>
          <p>HOTEL</p>
          <Link to="/about">
            <p>ABOUT US</p>
          </Link>
          <Link to="/contact">
            <p>CONTACT US</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
