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
      <div className={styles["wrapper-container"]}>
        <header className={styles["header-container"]}>
          <Header />
        </header>
        <article className={styles["article-container"]}>
          <Outlet />
        </article>
        <aside className={styles["aside-container"]}>
          <Sidebar />
        </aside>
      </div>
    </>
  );
}

export default Layout;
