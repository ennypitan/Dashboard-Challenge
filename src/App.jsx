// import { Routes, Route, Link } from "react-router-dom";

// import App from "./App.jsx";
import "./index.css";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";

// import Dashboard from "./components/Dashboard/Dashboard.jsx";
// import TrendPage from "./components/TrendPage/TrendPage.jsx";
// import Layout from "./components/Layout.jsx";

// const elementRouter = createRoutesFromElements(
//   <Route path="/" element={<Layout />}>
//     <Route path="" element={<Dashboard />} />
//     <Route path="trendpage" element={<TrendPage />} />
//   </Route>
// );

// const router = createBrowserRouter(elementRouter);
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
        {/* <RouterProvider router={router} /> */}
      </div>
    </>
  );
}

export default App;
