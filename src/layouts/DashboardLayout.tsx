import React from "react";
import DashboardNavbar from "../components/Bar/DashboardNavbar.tsx";
import Footer from "../components/Footer.tsx";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center p-4 sm:p-8 md:p-10 lg:p-14 xl:p-18 2xl:px-24 3xl:px-[10vw] 4xl:px-[25vw] bg-primaryBgColor">
      <DashboardNavbar />
      <div className="min-h-[calc(100vh-200px)]">{children}</div>

      <Footer />
    </div>
  );
};

export default DashboardLayout;
