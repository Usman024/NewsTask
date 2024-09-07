import React, { useState } from "react";
import { useStore } from "../../store/index.ts";
import NewsDetailsCard from "../Cards/NewsDetailsCard..tsx";
import LatestNewsCard from "../Cards/LatestNewsCard.tsx";
import NewsHeadlineCard from "../Cards/NewsHeadlineCard.tsx";
import Dialog from "../Dialog.tsx";

const Content = () => {
  const { newsArray, setSelectedID } = useStore((state) => ({
    newsArray: state.newsArray,
    setSelectedID: state.setSelectedId,
  }));
  const [isOpenNews, setIsOpenNews] = useState<boolean>(false);

  const handleClick = (id: number, type?: string) => {
    type === "headline" ? setSelectedID(id) : setSelectedID(id + 2);
    setIsOpenNews(true);
  };

  return (
    <>
      <div className="w-full min-h-fit flex flex-col gap-[5rem]">
        <div
          className="cursor-pointer"
          onClick={() => handleClick(0, "headline")}
        >
          {newsArray.length >= 1 && <NewsHeadlineCard />}
        </div>
        {newsArray.length > 1 && (
          <div className="flex flex-col">
            <p className="font-bold text-2xl mb-[2rem]">Latest News</p>
            <div className="grid grid-cols-1 gap-y-[0.5rem] gap-x-[2rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {newsArray
                .filter((item) => item.id > 1)
                .map((item, i) => {
                  return (
                    <div
                      className="cursor-pointer "
                      key={i}
                      onClick={() => handleClick(i)}
                    >
                      <LatestNewsCard details={item} />
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
      {isOpenNews && (
        <Dialog width={"modal-width-lg"} setIsOpenNews={setIsOpenNews}>
          <NewsDetailsCard />
        </Dialog>
      )}
    </>
  );
};

export default Content;
