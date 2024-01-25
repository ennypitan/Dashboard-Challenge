import Sidebar from "./components/Sidebar/Sidebar.jsx";

import Header from "./components/Header/Header.jsx";
import SalesTrend from "./components/Dashboard/SalesTrend.jsx";

import SummaryOrder from "./components/SummaryOrder/SummaryOrder.jsx";

function App() {
  return (
    <>
      <div className="wrapper">
        <header>
          <Header />
        </header>
        <article>
          <div className="flex-row">
            <div className="flex-container upper-dashboard">
              <SalesTrend />
              <SummaryOrder />
            </div>
          </div>
          <div className="flex-row">
            <div className="flex-container lower-dashboard">
              <div className="last-orders">Last Orders</div>
              <div className="top-platforms">Top Platforms</div>
            </div>
          </div>
        </article>
        <aside>
          <Sidebar />
        </aside>
      </div>
    </>
  );
}

export default App;
