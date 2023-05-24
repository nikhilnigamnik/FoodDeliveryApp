import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Nav = () => {
  return (
    <div className="py-4 fixed top-0 left-0 right-0 bg-white border">
      <div className="flex justify-between items-center  container">
        <div className="logo">
          <Link className="logo" to="/">
            <img
              src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1684857846/logo_o2djkp.png"
              alt=""
            />
          </Link>
        </div>
        <div className="links">
          <Link to="/">
            <p>Home</p>
          </Link>

          <Link to="/about">
            <p>About Us</p>
          </Link>
          <Link to="/contact">
            <p>Contact </p>
          </Link>
          <Link to="/author">
            <p>Author</p>
          </Link>
        </div>
        
        <div className="relative flex items-center">
          <AiOutlineShoppingCart className="text-[1.5rem] font-bold text-black" />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
