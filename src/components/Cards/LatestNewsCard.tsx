import React from "react";
import { News } from "../../types/News.ts";

type props = {
  details: News;
};

const LatestNewsCard = ({ details }: props) => {
  return (
    <div className="flex flex-col mb-5 gap-2 items-center">
      <img
        src={
          !!details.imgSrc
            ? details.imgSrc
            : "https://imgs.search.brave.com/YnmbZA-FRsgtMOmd2Tf7Gzt5kCMiE9dGjW1cTeJl9Dk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzE3LzUzLzU3/LzM2MF9GXzUxNzUz/NTcxMl9xN2Y5UUM5/WDZUUXhXaTZ4WVpa/Yk1tdzVjbkxNcjI3/OS5qcGc"
        }
        loading="lazy"
        alt="insertImage"
        className="w-full aspect-video object-cover rounded-xl"
      />
      <div className="flex flow-row gap-[1rem]">
        <p className="text-[12px] line-clamp-2 font-bold capitalize md:text-[15px] md:line-clamp-2">
          {!!details.author ? details.author : details.category}
        </p>
        <p className="text-[12px] line-clamp-2 text-primaryColor capitalize md:text-[15px] md:line-clamp-2">
          {details.source}
        </p>
      </div>
      <p className="text-sm line-clamp-2">{details.title}</p>
    </div>
  );
};

export default LatestNewsCard;
