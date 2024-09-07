import React from "react";
import { useStore } from "../../store/index.ts";

const Subscribe = () => {
  const selectedSource = useStore((state) => state.selectedSource);
  return (
    <div className="w-full h-fit py-[5rem] flex flex-col gap-3 justify-center items-center">
      <p className="text-xl font-bold font-headLine text-primaryColor lg:text-2xl">
        {selectedSource}
      </p>
      <p className="text-xl font-bold font-headLine lg:text-2xl">
        Let's subscribe so you don't miss any the latest updates
      </p>
      <div className="h-[5vh] md:h-[4vh] lg:h-[7vh] w-full flex justify-center">
        <input
          type="email"
          placeholder="Your Email"
          className=" w-[50vw] sm:w-[60%] md:w-[50%] h-[5vh] outline-none bg-[#D3D3D3] rounded-l-lg px-4 py-2  md:h-[4vh] lg:h-[60px]"
        />
        <button className="h-[5vh] bg-primaryColor rounded-r-lg px-4 text-white md:h-[4vh] lg:h-[60px]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default React.memo(Subscribe);
