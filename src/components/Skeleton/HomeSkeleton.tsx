import React from "react";
import NewsHeadlineCard from "../Skeleton/Card/NewsHeadineCard.tsx";
import LatestNewsCard from "../Skeleton/Card/LatestNewsCard.tsx";
const HomeSkeleton = () => {
  return (
    <div className="animate-pulse w-full min-h-fit flex flex-col gap-[5rem]">
      <NewsHeadlineCard />
      <div className="flex flex-col items-start justify-center">
        <p className="mb-3 text-2xl font-bold"></p>
        <div className="grid grid-cols-2 grid-rows-4 gap-y-[3rem] gap-x-[2rem] md:grid-cols-4 md:grid-rows-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((element, i) => {
            return <LatestNewsCard key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeSkeleton;
