import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Header from "./components/Header/Header.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import TrendPage from "./components/TrendPage/TrendPage.jsx";
import "./index.css";
// import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="wrapper">
        <header>
          <Header />
        </header>
        <article>
          <Dashboard />
        </article>
        <aside>
          <Sidebar />
        </aside>
      </div>
    </>
  );
}

export default App;
