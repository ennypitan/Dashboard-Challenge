import "./saletrend.css";
function SalesTrend() {
  return (
    <>
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

        <div className="sale-trend-content">
          <table id="q-graph">
            <thead></thead>
            <tbody>
              <tr className="qtr" id="q1">
                <th scope="row">Jan</th>
                <td className="sent bar" style={{ height: "4.25rem" }}></td>
              </tr>
              <tr className="qtr" id="q2">
                <th scope="row">Feb</th>
                <td className="sent bar" style={{ height: "7.5rem" }}></td>
              </tr>
              <tr className="qtr" id="q3">
                <th scope="row">Mar</th>
                <td className="sent bar" style={{ height: "2.5rem" }}></td>
              </tr>
              <tr className="qtr" id="q4">
                <th scope="row">Apr</th>
                <td className="sent bar" style={{ height: "10.0625rem" }}></td>
              </tr>
              <tr className="qtr" id="q5">
                <th scope="row">May</th>
                <td className="sent bar" style={{ height: "5.0625rem" }}></td>
              </tr>
              <tr className="qtr" id="q6">
                <th scope="row">Jun</th>
                <td
                  className="sent  bar-active"
                  style={{ height: "13.5rem" }}
                ></td>
              </tr>
              <tr className="qtr" id="q7">
                <th scope="row">Jul</th>
                <td className="sent bar" style={{ height: "5.0625rem" }}></td>
              </tr>
              <tr className="qtr" id="q8">
                <th scope="row">Aug</th>
                <td className="sent bar" style={{ height: "8.1875rem" }}></td>
              </tr>
              <tr className="qtr" id="q9">
                <th scope="row">Sep</th>
                <td className="sent bar" style={{ height: "11.375rem" }}></td>
              </tr>
              <tr className="qtr" id="q10">
                <th scope="row">Oct</th>
                <td className="sent bar" style={{ height: "3.1875rem" }}></td>
              </tr>
              <tr className="qtr" id="q11">
                <th scope="row">Nov</th>
                <td className="sent bar" style={{ height: "10.6875rem" }}></td>
              </tr>
              <tr className="qtr" id="q12">
                <th scope="row">Dec</th>
                <td className="sent bar" style={{ height: "9.4375rem" }}></td>
              </tr>
            </tbody>
          </table>
          <div id="ticks">
            <div className="tick" style={{ height: "45px" }}>
              <p>50,000</p>
            </div>
            <div className="tick" style={{ height: "45px" }}>
              <p>40,000</p>
            </div>
            <div className="tick" style={{ height: "45px" }}>
              <p>30,000</p>
            </div>
            <div className="tick" style={{ height: "45px" }}>
              <p>20,000</p>
            </div>
            <div className="tick" style={{ height: "45px" }}>
              <p>10,000</p>
            </div>
            <div className="tick" style={{ height: "45px" }}>
              <p>5,000</p>
            </div>
            <div className="tick" style={{ height: "45px" }}>
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SalesTrend;
