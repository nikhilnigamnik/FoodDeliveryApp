import React from "react";

const MenuShimmer = () => {
  return (
    <div>
      <div className="flex-1 mx-20 mt-[7rem]">
        <div className="animate-pulse border h-[110px] w-full bg-gray-100"></div>
        <div className="m-2">
          <div className="h-8"></div>
          <div className="flex flex-col max-w-[1200px] w-full mx-auto">
            {Array(6)
              .fill("")
              .map((item, index) => (
                <div
                  key={index}
                  className="animate-pulse border bg-gray-100 flex justify-between h-[170px] mb-6 p-4 "
                ></div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuShimmer;
