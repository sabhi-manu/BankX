import SideNavBar from "./SideNavBar";
import Header from "./Header";

import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="flex max-h-screen bg-gray-100">
      <SideNavBar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
