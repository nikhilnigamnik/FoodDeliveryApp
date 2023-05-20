import React from "react";

const Shimmer = ({index}) => {
  return (
    <div key={index} className="cardContainer">
      {Array(19)
        .fill("")
        .map((e) => (
          <div className="shimmerCard "></div>
        ))}{" "}
      <div className="shimmerCard "></div>
    </div>
  );
};

export default Shimmer;
