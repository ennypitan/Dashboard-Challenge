import Sidebar from "./components/Sidebar/Sidebar.jsx";

import Header from "./components/Header/Header.jsx";

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
              <div className="sales-trend">
                <div className="headings flex-row">
                  <div className="trend">Sales Trends</div>
                  <div className="sort">
                    <label for="sorting">Sort by:</label>
                    <select id="sorting" name="sort">
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="order-summary">Order Summary</div>
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
