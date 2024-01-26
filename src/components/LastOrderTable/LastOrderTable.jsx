import "./lastordertable.css";
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
        <LastOrderTableRow
          tableImgCard={TABLE_DATA[1].tableImgCard}
          tableNameTag={TABLE_DATA[1].tableNameTag}
          tableDate={TABLE_DATA[1].tableDate}
          tableAmount={TABLE_DATA[1].tableAmount}
          tableStatus={TABLE_DATA[1].tableStatus}
          tableInvoice={TABLE_DATA[1].tableInvoice}
          style={{ color: "#ED544E" }}
        />
        <LastOrderTableRow
          tableImgCard={TABLE_DATA[2].tableImgCard}
          tableNameTag={TABLE_DATA[2].tableNameTag}
          tableDate={TABLE_DATA[2].tableDate}
          tableAmount={TABLE_DATA[2].tableAmount}
          tableStatus={TABLE_DATA[2].tableStatus}
          tableInvoice={TABLE_DATA[2].tableInvoice}
        />
        <LastOrderTableRow
          tableImgCard={TABLE_DATA[3].tableImgCard}
          tableNameTag={TABLE_DATA[3].tableNameTag}
          tableDate={TABLE_DATA[3].tableDate}
          tableAmount={TABLE_DATA[3].tableAmount}
          tableStatus={TABLE_DATA[3].tableStatus}
          tableInvoice={TABLE_DATA[3].tableInvoice}
          style={{ color: "#ED544E" }}
        />
        <LastOrderTableRow
          tableImgCard={TABLE_DATA[4].tableImgCard}
          tableNameTag={TABLE_DATA[4].tableNameTag}
          tableDate={TABLE_DATA[4].tableDate}
          tableAmount={TABLE_DATA[4].tableAmount}
          tableStatus={TABLE_DATA[4].tableStatus}
          tableInvoice={TABLE_DATA[4].tableInvoice}
        />
      </div>
    </>
  );
}

export default LastOrderTable;
