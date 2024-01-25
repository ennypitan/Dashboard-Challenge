function SummaryCard({
  tickboxImg,
  freqImg,
  titleOrder,
  titleFigure,
  smallfreqImg,
}) {
  return (
    <>
      <div className="summary-card">
        <div className="row-1 flex-row">
          <div className="box-icon">
            <img src={tickboxImg} alt="box-tick" />
          </div>
          <div className="freq-box">
            <img src={freqImg} alt="" />
          </div>
        </div>
        <div className="row-2">
          <div className="order-title">{titleOrder}</div>
          <div className="order-figure">{titleFigure}</div>
        </div>
        <div className="row-3 flex-row">
          <div className="increase-value">
            <img src={smallfreqImg} alt="" />
            <span>23.5%</span>
          </div>
          <div className="prev-month">vs. previous month</div>
        </div>
      </div>
    </>
  );
}

export default SummaryCard;
