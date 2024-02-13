function LastOrderTableRow({
  tableImgCard,
  tableNameTag,
  tableDate,
  tableAmount,
  tableStatus,
  tableInvoice,
  style,
}) {
  return (
    <>
      <ul className="last-order-table">
        <li className="flex-row">
          <div className="table-name">
            <div className="ta-img-card">
              <img src={tableImgCard} alt="" />
            </div>
            <div className="ta-name-tag">{tableNameTag}</div>
          </div>
          <div className="table-date">{tableDate}</div>
          <div className="table-amount">{tableAmount}</div>
          <div className="table-status" style={style}>
            {tableStatus}
          </div>
          <div className="table-invoice">
            <img src={tableInvoice} alt="" />
            <span>view</span>
          </div>
        </li>
      </ul>
    </>
  );
}

export default LastOrderTableRow;
