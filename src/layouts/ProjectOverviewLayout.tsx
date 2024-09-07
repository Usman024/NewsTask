import React from "react";
import ProjectOverviewNavbar from "../components/Bar/ProjectOverviewNavbar.tsx";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProjectOverviewLayout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div>
      <ProjectOverviewNavbar />

      <div className="p-4 sm:p-8 md:p-10 lg:p-14 xl:p-18 2xl:px-24 3xl:px-[10vw] 4xl:px-[25vw]">
        <div>{children} </div>
        <button
          onClick={() => navigate("/dashboard")}
          className="px-5 py-2 text-white bg-primaryColor rounded-xl"
        >
          Go to Project
        </button>
      </div>
    </div>
  );
};

export default ProjectOverviewLayout;
