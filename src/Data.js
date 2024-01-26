import tickboxImg from "./assets/box-tick.svg";
import tickboxImg2 from "./assets/3d-rotate.svg";
import tickboxImg3 from "./assets/boxicon3.svg";
import tickboxImg4 from "./assets/boxicon4.svg";
import freqImage from "./assets/freq.png";
import freqImage2 from "./assets/freq2.png";
import freqImage3 from "./assets/freq3.png";
import freqImage4 from "./assets/freq4.png";
import sFreqImg from "./assets/s-freq.svg";
import sFreqImg2 from "./assets/smallfreq2.svg";
import invoiceIcon from "./assets/invoice-icon.svg";
import tableImage1 from "./assets/tableImg1.png";
import tableImage2 from "./assets/tableImg2.png";
import tableImage3 from "./assets/tableImg3.png";
import tableImage4 from "./assets/tableImg4.png";
import tableImage5 from "./assets/tableImg5.png";
// import propsImg from "./assets/config.png";
// import jsxImg from "./assets/jsx-ui.png";
// import stateImg from "./assets/state-mgmt.png";

export const SUMMARY_DATA = [
  {
    tickboxImg: tickboxImg,
    freqImg: freqImage,
    titleOrder: "Total Order",
    titleFigure: 350,
    smallfreqImg: sFreqImg,
  },
  {
    tickboxImg: tickboxImg2,
    freqImg: freqImage2,
    titleOrder: "Total Refund",
    titleFigure: 270,
    smallfreqImg: sFreqImg2,
  },
  {
    tickboxImg: tickboxImg3,
    freqImg: freqImage3,
    titleOrder: "Average Sales",
    titleFigure: 1567,
    smallfreqImg: sFreqImg2,
  },
  {
    tickboxImg: tickboxImg4,
    freqImg: freqImage4,
    titleOrder: "Total Income",
    titleFigure: "$350,000",
    smallfreqImg: sFreqImg,
  },
];

export const TABLE_DATA = [
  {
    tableImgCard: tableImage1,
    tableNameTag: "Marcus Bergson",
    tableDate: "Nov 15, 2023",
    tableAmount: "$80,000",
    tableStatus: "Paid",
    tableInvoice: invoiceIcon,
  },
  {
    tableImgCard: tableImage2,
    tableNameTag: "Jaydon Vaccaro",
    tableDate: "Nov 14, 2023",
    tableAmount: "$150,000",
    tableStatus: "Refund",
    tableInvoice: invoiceIcon,
  },
  {
    tableImgCard: tableImage3,
    tableNameTag: "Corey Schleifer",
    tableDate: "Nov 15, 2023",
    tableAmount: "$87,000",
    tableStatus: "Paid",
    tableInvoice: invoiceIcon,
  },
  {
    tableImgCard: tableImage4,
    tableNameTag: "Cooper Press",
    tableDate: "Nov 14, 2023",
    tableAmount: "$100,000",
    tableStatus: "Refund",
    tableInvoice: invoiceIcon,
  },
  {
    tableImgCard: tableImage5,
    tableNameTag: "Phillip Lubin",
    tableDate: "Nov 13, 2023",
    tableAmount: "$78,000",
    tableStatus: "Paid",
    tableInvoice: invoiceIcon,
  },
];
