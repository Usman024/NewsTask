import React from "react";

const EmptyHome = () => {
  return (
    <div className="w-full p-5 uppercase h-[100vh] flex flex-col justify-center gap-5 items-center">
      <img
        src="/assets/images/emptyResult1.png"
        className="w-[min(600px,70vw)] -mt-40 mix-blend-multiply	"
        alt="insertImg"
      />
      <p className="text-base font-semibold -mt-10 text-primaryColor text-center md:text-xl">
        No News Found For your selected filter
      </p>
    </div>
  );
};

export default EmptyHome;
