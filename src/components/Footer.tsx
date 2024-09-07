import React from "react";
import { FooterLinks } from "../constant/FooterLinks.ts";

const Footer = () => {
  return (
    <div className="w-full h-fit grid grid-rows-2 grid-cols-3 gap-x-[3rem] gap-y-[3rem] py-[5rem] border-t-2 border-secondaryColor md:grid-rows-1 md:grid-cols-5">
      {FooterLinks.map((item, i) => {
        return (
          <div key={i} className="flex flex-col items-start gap-2 ">
            <p className="text-lg font-bold">{item.category}</p>
            <p className="text-lg">{item.value1}</p>
            <p className="text-lg">{item.value2}</p>
            <p className="text-lg">{item.value3}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
