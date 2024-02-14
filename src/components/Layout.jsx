import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Header from "./components/Header/Header.jsx";
// import Dashboard from "./components/Dashboard/Dashboard.jsx";
// import TrendPage from "./components/TrendPage/TrendPage.jsx";
import "./../index.css";

function Layout() {
  return (
    <>
      <div className="wrapper">
        <header>
          <Header />
        </header>
        <article>
          <Outlet />
        </article>
        <aside>
          <Sidebar />
        </aside>
      </div>
    </>
  );
}

export default Layout;
