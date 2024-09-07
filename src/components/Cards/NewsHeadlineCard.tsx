import React, { useEffect, useState } from "react";
import { useStore } from "../../store/index.ts";
import { News } from "../../types/News.ts";

const NewsHeadlineCard = () => {
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
  const newsArray = useStore((state) => state.newsArray);

  useEffect(() => {
    if (newsArray[0] !== undefined) {
      setData(newsArray[0]);
    }
  }, [newsArray]);

  return (
    <div className="capitalize w-full flex flex-col items-start gap-2 md:flex-row md:gap-[2rem]">
      <img
        className="w-full lg:w-[60%] aspect-video object-cover rounded-xl md:w-[40%]"
        loading="lazy"
        src={
          !!data.imgSrc
            ? data.imgSrc
            : "https://imgs.search.brave.com/YnmbZA-FRsgtMOmd2Tf7Gzt5kCMiE9dGjW1cTeJl9Dk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzE3LzUzLzU3/LzM2MF9GXzUxNzUz/NTcxMl9xN2Y5UUM5/WDZUUXhXaTZ4WVpa/Yk1tdzVjbkxNcjI3/OS5qcGc"
        }
        alt="insertImg"
      />
      <div className="pt-3 flex flex-col gap-2 md:w-[50%]">
        <div className="flex flex-row gap-4 lg:gap-8">
          <p className="font-medium text-md line-clamp-2">
            {!!data.author ? data.author : data.category}
          </p>
          <p className="text-md text-primaryColor line-clamp-2">
            {data.source}
          </p>
        </div>
        <p className="mt-4 text-3xl font-semibold font-headLine md:mt-7">
          {data.title}
        </p>
      </div>
    </div>
  );
};

export default NewsHeadlineCard;
