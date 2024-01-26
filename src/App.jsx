import Sidebar from "./components/Sidebar/Sidebar.jsx";

import Header from "./components/Header/Header.jsx";
import SalesTrend from "./components/Dashboard/SalesTrend.jsx";

import SummaryOrder from "./components/SummaryOrder/SummaryOrder.jsx";
import LastOrderTable from "./components/LastOrderTable/LastOrderTable.jsx";
import TopPlatform from "./components/TopPlatform/TopPlatform.jsx";

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
              <LastOrderTable />
              <TopPlatform />
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
