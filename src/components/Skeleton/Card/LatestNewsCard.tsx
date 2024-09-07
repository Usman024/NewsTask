import React from "react";

const LatestNewsCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-slate-600 w-[40vw] aspect-video rounded-xl md:w-[20vw]" />
      <div className="flex flow-row gap-[1rem]">
        <div className="bg-slate-600 w-[10vw] h-[20px] rounded-full md:w-[6vw]"></div>
        <div className="bg-slate-600 w-[10vw] h-[20px] rounded-full md:w-[6vw]"></div>
      </div>
      <div className="bg-slate-600 w-[40vw] h-[20px] rounded-full md:w-[20vw]"></div>
    </div>
  );
};

export default LatestNewsCard;
