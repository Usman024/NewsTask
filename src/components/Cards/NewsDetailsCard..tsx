import React, { useEffect, useState } from "react";

import { useStore } from "../../store/index.ts";
import { News } from "../../types/News.ts";

const NewsDetailsCard = () => {
  const { newsArray, selectedID } = useStore((state) => ({
    newsArray: state.newsArray,
    selectedID: state.selectedId,
  }));
  const [data, setData] = useState<News>({
    id: 0,
    imgSrc: "",
    author: "",
    source: "",
    category: "",
    title: "",
    description: "",
    publishedAt: "",
  });
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    setData(newsArray[selectedID]);
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [selectedID]);

  return (
    <>
      <div className="flex flex-col gap-[1rem] md:flex-row">
        <img
          src={
            !!data.imgSrc
              ? data.imgSrc
              : "https://imgs.search.brave.com/YnmbZA-FRsgtMOmd2Tf7Gzt5kCMiE9dGjW1cTeJl9Dk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzE3LzUzLzU3/LzM2MF9GXzUxNzUz/NTcxMl9xN2Y5UUM5/WDZUUXhXaTZ4WVpa/Yk1tdzVjbkxNcjI3/OS5qcGc"
          }
          loading="lazy"
          alt="insertImage"
          className="w-full aspect-video object-cover rounded-xl md:w-[60%]  lg:w-[70%]"
        />
        <div className="flex flex-col gap-4 py-1 md:gap-2">
          <div className="flex flex-row gap-4">
            <p className="font-semibold text-secondaryColor">
              {!!data.author ? data.author : data.category}
            </p>
            <p className="text-primaryColor">{data.source}</p>
          </div>
          <p className="mt-3 text-xl font-bold font-headLine">{data.title}</p>
        </div>
      </div>
      <p className="mt-5 font-medium text-gray-700 text-md md:text-lg">
        {data.description}
      </p>
    </>
  );
};

export default NewsDetailsCard;
