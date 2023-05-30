import React from "react";
import { Link } from "react-router-dom";

const NoMatchfound = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div>No Match Found </div>
      <Link to="/">
        <div className="bg-black text-white px-2 rounded shadow-sm">Search Again</div>
      </Link>
    </div>
  );
};

export default NoMatchfound;
