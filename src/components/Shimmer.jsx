import React from "react";

const Shimmer = ({ id }) => {
  return (
    <>
      <div className="flex justify-center">
      <div className="mt-[4rem] py-4 rounded-md w-[30%] border"></div>
      </div>
      <div key={id} className="grid gap-10 px-10 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 mt-[3rem]">
        {Array(20)
          .fill("")
          .map((e) => (
            <div className="border h-[40vh] gap-4 flex flex-col bg-gray-100 p-10">
              <div className="border  w-full h-[50%]"></div>
              <div className="border py-3 w-full "></div>
              <div className="border py-3 w-full "></div>
              <div className="border py-3 w-full "></div>

            </div>
          ))}
        {""}
        {/* <div className=" "></div> */}
      </div>
    </>
  );
};

export default Shimmer;
