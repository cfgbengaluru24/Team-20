import React, { useEffect, useState } from "react";
import "./Donator.css";
// import images from "../../assets/images/images.jpeg";
import image from "../../../assets/download.jpeg";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import PaymentForm from "../Payment/PaymentForm";
// import Bill from "../Bill/Bill";
// import "../assets/js/ProfileScript";

const Donator = () => {
  let curDate = new Date();
  let cur = String(curDate).substring(0, 16);

  //   const ClickReport = function () {
  //     navigator.geolocation.getCurrentPosition(
  //       function (position) {
  //         // const latitude = position.coords.latitude;
  //         // const longitude = position.coords.longitude;
  //         const latitude = 12.3167;
  //         const longitude = 76.614;
  //         sendDataToBackend(latitude, longitude);
  //       },
  //       function (error) {
  //         console.error("Error getting location:", error);
  //       }
  //     );
  //   };

  //   function sendDataToBackend(latitude, longitude) {
  //     // Use Fetch API to send a POST request to the backend endpoint
  //     fetch("http://localhost:3001/report-outage", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ latitude: latitude, longitude: longitude }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("Report submitted:", data);
  //       })
  //       .catch((error) => {
  //         console.error("Error sending report:", error);
  //       });
  //   }
  //API CALL FOR PROFILE
  const { userId } = useParams();

  //   // API CALL FOR ALL BILLS
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    phone: "",
    email: "",
    bloodGroup: "",
    avatar: "",
  });

  const [bills, setBills] = useState([]);
  //   const [totalUnits, setTotalUnits] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  // let user = {
  //   name: "",
  //   phone: "",
  //   email: "",
  //   meterId: "",
  //   address: "",
  // };

  const fetchUser = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/v1/users/${userId}`
    );

    setUserDetails(response.data.data);
    // console.log("details", userDetails);
  };

  const fetchInfo = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `http://localhost:8000/api/v1/donations/getDonationsByUser/${userId}`
    );
    //   .then((res) => res.json())
    //   .then((data) => {
    setBills(response.data.data);
    console.log(response);
    // Calculate total units and total amount
    // const totalUnitsUsed = data.reduce(
    //   (sum, bill) => sum + bill.consumption,
    //   0
    // );

    const totalAmountPaid = bills.reduce(
      (sum, bill) => (bill.status === "accepted" ? sum + bill.amount : sum),
      0
    );

    console.log(totalAmountPaid);
    // setTotalUnits(totalUnitsUsed);
    setTotalAmount(totalAmountPaid);
    //   });
  };
  useEffect(() => {
    fetchInfo();
    fetchUser();
  }, []);

  //   user = userDetails[0];
  //   console.log(userDetails);
  //   const navigate = useNavigate();

  //   const handleInvoiceClick = (bill, user) => {
  //     navigate("/bill", { state: { user, bill } });
  //   };

  return (
    <body>
      <main className="app">
        <div className="container-main">
          <div className="left-side">
            {/* <div className="operation operation--transfer">
              <h2>Profile:</h2>

              <li>
                <b>Name</b>: Adithya Baliga
              </li>
              <li>
                <b>Type</b>: Electricity Bill
              </li>
              <li>
                <b>Address</b>: Vijaynagar 2nd street
              </li>
              <li>
                <b>Meter No</b>: 123456
              </li>
              
            </div>
            <button
              onClick={() => {
                ClickReport();
              }}
              id="report-button"
            >
              Report Outage
            </button> */}
            <div class="wrapper">
              {/*profile and name interchange*/}
              <div class="name">
                <center>PROFILE</center>
              </div>
              <div class="img-area">
                <div class="inner-area">
                  <img src={userDetails.avatar} alt="Error 404" />
                </div>
              </div>
              <div class="aboutname">{userDetails.fullName}</div>
              {/* <div class="icon arrow">
                <i class="fas fa-arrow-left"></i>
              </div>
              <div class="icon dots">
                <i class="fas fa-ellipsis-v"></i>
              </div> */}

              <div className="list">
                <li>
                  <b>Email</b>: {userDetails.email}
                </li>
                <li>
                  <b>Phone</b>: {userDetails.number}
                </li>
                <li>
                  <b>Blood Group</b>: {userDetails.bloodGroup}
                </li>
                {/* <li>
                  <b>Meter No</b>:{}
                </li> */}
              </div>
            </div>
          </div>

          {/* <!-- MOVEMENTS --> */}

          {/* {allproducts.map((product, index) => {
          return (
            <>
              <div
                key={index}
                className="listproduct-format-main listproduct-format"
              >
                <p>{product.id}</p>
                <p>{product.name}</p>
                <p>{product.meterId}</p>
                <p>{product.region}</p>
                <p>{product.email}</p>
                <img
                  onClick={() => {
                    remove_product(product.id);
                  }}
                  className="listproduct-remove-icon"
                  src={cross_icon}
                  alt=""
                />
              </div>
              <hr />
            </>
          );
        })} */}
          <div className="right-side">
            <div className="details">
              {/* <!-- BALANCE --> */}
              <div className="balance">
                <div>
                  <p className="balance__label">Current Donations</p>
                  <p className="balance__date">
                    As of <span className="date">{cur}</span>
                  </p>
                </div>
                <p className="balance__value">Total: ₹{totalAmount}</p>
              </div>
              {/* <!-- SUMMARY --> */}
              <div className="summary">
                <p className="summary__label">No of Donations : </p>
                <p className="summary__value summary__value--in">
                  {bills.length}
                </p>
                {/* <button className="btn--sort">&downarrow; SORT</button> */}
              </div>
            </div>

            <div className="movements">
              {bills.map((bill, index) => {
                return (
                  <>
                    {bill.status === "accepted" ? (
                      <div className="movements__row" key={index}>
                        {bill.status === "accepted" ? (
                          <div className="movements__type movements__type--deposit">
                            {bill.orderId}
                          </div>
                        ) : (
                          <div className="movements__type movements__type--withdrawal">
                            {bill.orderId}
                          </div>
                        )}
                        <div className="movements__date">
                          {bill.createdAt.slice(0, 10)}
                        </div>
                        {/* <div className="movements__value">
                        {" "}
                        <strong>Units: </strong> {bill.fullName}
                      </div> */}
                        <div className="movements__value">
                          {" "}
                          <strong>Amount: </strong> {bill.amount}
                        </div>
                        <div className="movements__value"></div>

                        <button
                          className="button-57"
                          role="button"
                          type="button"
                          // onClick={() => handleInvoiceClick(bill, userDetails)}
                        >
                          <span>
                            <i className="fa-solid fa-download"></i>
                          </span>
                          <span>Certificate</span>
                        </button>

                        {/* <Link to="/payment"> */}

                        <button
                          type="button"
                          className="button-56"
                          role="button"
                        >
                          <span>
                            <i className="fa-solid fa-download"></i>
                          </span>
                          <span>
                            {/* <PaymentForm items={bill} userId={userId} /> */}
                            Invoice
                          </span>
                        </button>

                        {/* </Link> */}
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                );
              })}
              {/* <div className="movements__row">
                <div className="movements__type movements__type--deposit"></div>
                <div className="movements__date">23/11/2108</div>
                <div className="movements__value"></div>
                <button
                  class="button-57"
                  role="button"
                  type="button"
                  className="invoice-btn"
                >
                  <span>
                    <i className="fa-solid fa-download"></i>
                  </span>
                  <span>Download</span>
                </button>

                <button class="button-56" role="button">
                  <span>
                    <i className="fa-solid fa-download"></i>
                  </span>
                  <span>Pay</span>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </main>

      {/* <script src="script.js"></script> */}
    </body>
  );
};

export default Donator;
