import { useNavigate } from "react-router-dom";
import React from "react";

const ProjectOverviewNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[4rem] bg-primaryBgColor p-4 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-24 3xl:px-[10vw] 4xl:px-[25vw] flex flex-row justify-between items-center">
      <p className="text-2xl font-bold text-primaryColor">News Project</p>
      <button
        onClick={() => navigate("/dashboard")}
        className="px-5 py-2 text-white bg-primaryColor rounded-xl"
      >
        Go to Project
      </button>
    </div>
  );
};

export default ProjectOverviewNavbar;
