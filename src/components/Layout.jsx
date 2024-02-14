import styles from "./layout.module.css";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Header from "./components/Header/Header.jsx";
// import Dashboard from "./components/Dashboard/Dashboard.jsx";
// import TrendPage from "./components/TrendPage/TrendPage.jsx";

function Layout() {
  return (
    <>
      <div className={styles.wrapper} style={{ backgroundColor: "red" }}>
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
