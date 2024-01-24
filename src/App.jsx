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
                    <label htmlFor="sorting">Sort by:</label>
                    <select id="sorting" name="sort">
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                  </div>
                </div>

                <table id="q-graph">
                  {/* <caption>Quarterly Results</caption> */}
                  <thead></thead>
                  <tbody>
                    <tr className="qtr" id="q1">
                      <th scope="row">Jan</th>
                      <td className="sent bar" style={{ height: "111px" }}>
                        {/* <p>$18,450.00</p> */}
                      </td>
                    </tr>
                    <tr className="qtr" id="q2">
                      <th scope="row">Q2</th>
                      <td className="sent bar" style={{ height: "206px" }}></td>
                    </tr>
                    <tr className="qtr" id="q3">
                      <th scope="row">Q3</th>
                      <td className="sent bar" style={{ height: "259px" }}></td>
                    </tr>
                    <tr className="qtr" id="q4">
                      <th scope="row">Q4</th>
                      <td className="sent bar" style={{ height: "110px" }}></td>
                    </tr>
                  </tbody>
                </table>

                <div id="ticks">
                  <div className="tick" style={{ height: "59px" }}>
                    <p>$50,000</p>
                  </div>
                  <div className="tick" style={{ height: "59px" }}>
                    <p>$40,000</p>
                  </div>
                  <div className="tick" style={{ height: "59px" }}>
                    <p>$30,000</p>
                  </div>
                  <div className="tick" style={{ height: "59px" }}>
                    <p>$20,000</p>
                  </div>
                  <div className="tick" style={{ height: "59px" }}>
                    <p>$10,000</p>
                  </div>
                </div>
              </div>
              <div className="order-summary">Order Summary</div>
            </div>
            <div className="flex-row">
              <div className="flex-container lower-dashboard">
                <div className="last-orders">Last Orders</div>
                <div className="top-platforms">Top Platforms</div>
              </div>
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
