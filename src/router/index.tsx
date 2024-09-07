import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ProjectOverviewLayout from "../layouts/ProjectOverviewLayout.tsx";
import DashboardLayout from "../layouts/DashboardLayout.tsx";
import DashboardHome from "../pages/Dashboard/Index.tsx";
import ProjectOverview from "../pages/ProjectOverview/Index.tsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProjectOverviewLayout>
        <ProjectOverview />
      </ProjectOverviewLayout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <DashboardLayout>
        <DashboardHome />
      </DashboardLayout>
    ),
  },
]);
