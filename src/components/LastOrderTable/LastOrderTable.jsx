import { TABLE_DATA } from "../../Data";
import LastOrderTableRow from "./LastOrderTableRow";

function LastOrderTable() {
  return (
    <>
      <div className="last-orders">
        <div className="heading flex-row">
          <div className="l-order">Last Orders</div>
          <div className="see-all">See All</div>
        </div>
        <div className="sub-heading flex-row">
          <div className="name">Name</div>
          <div className="t-date">Date</div>
          <div className="amount">Amount</div>
          <div className="status">Status</div>
          <div className="invoice">Invoice</div>
        </div>
        <LastOrderTableRow
          tableImgCard={TABLE_DATA[0].tableImgCard}
          tableNameTag={TABLE_DATA[0].tableNameTag}
          tableDate={TABLE_DATA[0].tableDate}
          tableAmount={TABLE_DATA[0].tableAmount}
          tableStatus={TABLE_DATA[0].tableStatus}
          tableInvoice={TABLE_DATA[0].tableInvoice}
        />
        <LastOrderTableRow />
      </div>
    </>
  );
}

export default LastOrderTable;
