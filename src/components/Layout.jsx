import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./Sidebar/Sidebar";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Sidebar />
    </>
  );
}

export default Layout;
