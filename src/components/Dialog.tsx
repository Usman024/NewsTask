import React from "react";

const Dialog = ({ children, setIsOpenNews, width }) => {
  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] py-10 z-[3000] bg-secondaryColor bg-opacity-70 flex flex-col justify-center items-center">
      <article
        className={`${width} relative overflow-scroll hideScrollbar p-3 sm:p-5 lg:p-10 bg-primaryBgColor rounded-xl`}
      >
        {/* <img
          className="cursor-pointer bg-primaryBgColor absolute top-5 right-5 w-[15px] h-[15px]"
          src="/assets/images/close.png"
          onClick={() => setIsOpenNews(false)}
        /> */}
        {children}
      </article>
      <button
        onClick={() => setIsOpenNews(false)}
        className="px-4 py-2 mt-3 text-white rounded-full bg-primaryColor"
      >
        Close
      </button>
    </div>
  );
};

export default Dialog;
