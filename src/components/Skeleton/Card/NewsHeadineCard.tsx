import React from "react";

const NewsHeadineCard = () => {
  return (
    <div className="w-full flex flex-col items-start gap-2 md:flex-row md:gap-[2rem]">
      <div className="w-full aspect-video rounded-xl  lg:w-[60%] md:w-[40%] bg-slate-600" />
      <div className="flex flex-col w-full gap-2 pt-3">
        <div className="flex flex-row w-full gap-4">
          <div className="w-[40%] md:w-[20%] h-[20px] rounded-full bg-slate-600" />
          <div className="w-[40%] md:w-[20%] h-[20px] rounded-full bg-slate-600" />
        </div>

        <div className="w-[60%] h-[20px] md:w-[52%] rounded-full bg-slate-600" />
        <div className="w-[50%] h-[20px] rounded-full bg-slate-600" />
      </div>
    </div>
  );
};

export default NewsHeadineCard;
