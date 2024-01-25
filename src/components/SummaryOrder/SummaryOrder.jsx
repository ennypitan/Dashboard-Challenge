import "./summaryorder.css";
import SummaryCard from "./SummaryCard";
import { SUMMARY_DATA } from "../../Data";

function SummaryOrder() {
  return (
    <>
      <div className="order-summary">
        <div className="flex-row">
          <div className="flex-container summary-container">
            <SummaryCard
              tickboxImg={SUMMARY_DATA[0].tickboxImg}
              freqImg={SUMMARY_DATA[0].freqImg}
              titleOrder={SUMMARY_DATA[0].titleOrder}
              titleFigure={SUMMARY_DATA[0].titleFigure}
              smallfreqImg={SUMMARY_DATA[0].smallfreqImg}
            />
            <SummaryCard />
            {/* <div className="summary-card">Card 2</div>
            <div className="summary-card">Card 3</div>
            <div className="summary-card">Card 4</div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SummaryOrder;
