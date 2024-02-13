import SalesTrend from "../Dashboard/SaleTrend/SalesTrend.jsx";

import SummaryOrder from "../Dashboard/SummaryOrder/SummaryOrder.jsx";
import LastOrderTable from "../Dashboard/LastOrderTable/LastOrderTable.jsx";
import TopPlatform from "../Dashboard/TopPlatform/TopPlatform.jsx";

function Dashboard() {
  return (
    <>
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
    </>
  );
}

export default Dashboard;
