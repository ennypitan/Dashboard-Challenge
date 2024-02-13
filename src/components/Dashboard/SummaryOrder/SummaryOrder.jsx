import "./summaryorder.css";
import SummaryCard from "./SummaryCard";
import { SUMMARY_DATA } from "../../../Data";

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
            <SummaryCard
              tickboxImg={SUMMARY_DATA[1].tickboxImg}
              freqImg={SUMMARY_DATA[1].freqImg}
              titleOrder={SUMMARY_DATA[1].titleOrder}
              titleFigure={SUMMARY_DATA[1].titleFigure}
              smallfreqImg={SUMMARY_DATA[1].smallfreqImg}
              style={{
                backgroundColor: "rgba(237, 84, 78, 0.12)",
                color: "#ED544E",
              }}
            />
            <SummaryCard
              tickboxImg={SUMMARY_DATA[2].tickboxImg}
              freqImg={SUMMARY_DATA[2].freqImg}
              titleOrder={SUMMARY_DATA[2].titleOrder}
              titleFigure={SUMMARY_DATA[2].titleFigure}
              smallfreqImg={SUMMARY_DATA[2].smallfreqImg}
              style={{
                backgroundColor: "rgba(237, 84, 78, 0.12)",
                color: "#ED544E",
              }}
            />
            <SummaryCard
              tickboxImg={SUMMARY_DATA[3].tickboxImg}
              freqImg={SUMMARY_DATA[3].freqImg}
              titleOrder={SUMMARY_DATA[3].titleOrder}
              titleFigure={SUMMARY_DATA[3].titleFigure}
              smallfreqImg={SUMMARY_DATA[3].smallfreqImg}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SummaryOrder;
