import React from "react";
import "./Bill.css";
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
// import logo from '../../assets/logo.jpg'

const Bill = () => {
  let curDate = new Date();
  let cur = String(curDate).substring(0, 16);
  const location = useLocation();
  const { user, bill } = location.state || {};
  console.log(user, bill);

  const downloadInvoice = async () => {
    const input = document.getElementById("print");

    // Set the scale factor to fit the content in the PDF
    const scale = 2;
    const canvas = await html2canvas(input, { scale });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width / scale, canvas.height / scale],
    });

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      canvas.width / scale,
      canvas.height / scale
    );
    pdf.save("invoice.pdf");
  };

  return (
    <div className="invoice-wrapper" id="print-area">
      <div className="invoice" id="print">
        <div className="invoice-container">
          <div className="invoice-head">
            <div className="invoice-head-top">
              <div className="invoice-head-top-left text-start">
                {/* <img src={logo} /> */}
              </div>
              <div className="invoice-head-top-right text-end">
                <h3>Invoice</h3>
              </div>
            </div>
            <div className="hr"></div>
            <div className="invoice-head-middle">
              <div className="invoice-head-middle-left text-start">
                <p>
                  <span className="text-bold">Date:</span> {cur}
                </p>
              </div>
              <div className="invoice-head-middle-right text-end">
                <p>
                  <span className="text-bold">Invoice No:</span>
                  {bill.billId}
                </p>
              </div>
            </div>
            <div className="hr"></div>
            <div className="invoice-head-bottom">
              <div className="invoice-head-bottom-left">
                <ul>
                  <li className="text-bold">Invoiced To:</li>
                  <li>{user.name}</li>
                  <li>{user.region}</li>
                </ul>
              </div>
              <div className="invoice-head-bottom-right">
                <ul className="text-end">
                  <li className="text-bold">Pay To:</li>
                  <li>Powertrack</li>
                  <li>JSSSTU</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="overflow-view">
            <div className="invoice-body">
              <table>
                <thead>
                  <tr>
                    <td className="text-bold">Service</td>
                    <td className="text-bold">Phase Field</td>
                    <td className="text-bold">Meter Number</td>
                    <td className="text-bold">Rate</td>
                    <td className="text-bold">Units</td>
                    <td className="text-bold">Amount</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Electricity Bill</td>
                    <td>{user.address}</td>
                    <td>{user.meterId}</td>
                    <td>7.00</td>
                    <td>{bill.consumption}</td>
                    <td className="text-end">{bill.amount}</td>
                  </tr>
                </tbody>
              </table>
              <div className="invoice-body-bottom">
                <div className="invoice-body-info-item border-bottom">
                  <div className="info-item-td text-end text-bold">
                    Sub Total:
                  </div>
                  <div className="info-item-td text-end">{bill.amount}</div>
                </div>
                <div className="invoice-body-info-item border-bottom">
                  <div className="info-item-td text-end text-bold">Tax:</div>
                  <div className="info-item-td text-end">0.00</div>
                </div>
                <div className="invoice-body-info-item">
                  <div className="info-item-td text-end text-bold">Total:</div>
                  <div className="info-item-td text-end">{bill.amount}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="invoice-foot text-center">
            <p>
              <span className="text-bold text-center">NOTE:&nbsp;</span>This is
              computer generated receipt and does not require physical
              signature.
            </p>
            <br />
            <p>
              <b>Due Date</b>:{bill.dueDate.substring(0, 10)}
            </p>
            <div className="invoice-btns">
              <button
                type="button"
                className="invoice-btn"
                onClick={downloadInvoice}
              >
                <span>
                  <i className="fa-solid fa-download"></i>
                </span>
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bill;
