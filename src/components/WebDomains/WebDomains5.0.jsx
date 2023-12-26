import React from "react";
import { Chart as ChartJs, ArcElement, LinearScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./webdomains.css";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Linkedin from "../../assets/linkedin.png";
import Twitter from "../../assets/twitter.png";
ChartJs.register(ArcElement, LinearScale);
const WebDomains5 = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50],
        backgroundColor: ["#FF3FA4", "yellow"],
      },
    ],
  };

  return (
    <>
      <div className=" card web-container">
        {/* header */}
        <div
          className="card-header "
          id="main-header"
          style={{ background: "none" }}
        >
          {/* card-header-left */}
          <div className="card-header-left">
            <h4>Templates</h4>
            {/* <span>
            <p>Show:</p>
            <select>
              <option>This month</option>
            </select>
          </span> */}
          </div>
          {/* card-header-right */}
          <div className="card-header-right">
            <h6 style={{ color: "black" }}>Manage Templates</h6>
            <span>
              {" "}
              <i class="bi bi-arrow-right-circle"></i>
            </span>
          </div>
        </div>
        {/* header */}
        <div className="chart-container d-flex">
          <div className="doughnut">
            <div
              className="card"
              style={{
                width: "200px",
                height: "50vh",
                alignItems: "center",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "-70px",
              }}
            >
              <p style={{ fontWeight: "600" }}>TEMPLATE SUMMARY</p>
              <Doughnut
                style={{ width: "150px", height: "150px" }}
                data={data}
              />
              <div className="color">
                <p>
                  {" "}
                  <i
                    class="bi bi-circle-fill "
                    style={{ color: "yellow" }}
                  ></i>{" "}
                  NOT YET
                </p>
              </div>
            </div>
          </div>
          <div className="main-charts  d-flex">
            <div className="bar-charts ">
              <div
                className="card barcard"
                style={{ width: "100vh", height: "50vh", marginTop: "-10px" }}
              >
                <div className="card-links ">
                  <div className="links">
                    <p
                      style={{
                        background: "lightgrey",
                        paddingTop: "30px",
                        width: "100%",
                        marginLeft: "-2px",
                        borderTopLeftRadius: "9px",
                        marginBottom: "55px",
                      }}
                    >
                      devevoquins.com
                      <i class="bi bi-exclamation-circle-fill"></i>{" "}
                      <i
                        class="bi bi-chevron-right"
                        style={{ marginLeft: "120px" }}
                      ></i>
                    </p>
                    <p
                      style={{
                        padding: "1px",
                        width: "100%",
                        marginLeft: "-2px",
                        marginBottom: "20px",
                      }}
                    >
                      devevoquins.xyz <i class="bi bi-check-circle-fill"></i>{" "}
                      <i
                        class="bi bi-chevron-right"
                        style={{ marginLeft: "150px" }}
                      ></i>
                    </p>
                    <p
                      style={{
                        padding: "1px",
                        width: "100%",
                        marginLeft: "-2px",
                        marginBottom: "20px",
                      }}
                    >
                      devevoquins.xyz <i class="bi bi-check-circle-fill"></i>{" "}
                      <i
                        class="bi bi-chevron-right"
                        style={{ marginLeft: "150px" }}
                      ></i>
                    </p>
                  </div>
                  <div className="additional-links">
                    <div>
                      <p style={{ marginBottom: "-10px" }}>
                        shop.devevoquins.com
                      </p>
                      <span style={{ fontSize: "10px", marginBottom: "30px" }}>
                        www.example.com
                      </span>
                    </div>
                    <p style={{ marginBottom: "-10px" }}>
                      music.devevoquins.com
                    </p>
                    <span style={{ fontSize: "10px" }}>www.example.com</span>
                    <p style={{ marginBottom: "-10px" }}>
                      music.devevoquins.com{" "}
                      <i
                        class="bi bi-circle-fill "
                        style={{ color: "yellow" }}
                      ></i>
                    </p>
                    <span style={{ fontSize: "15px", color: "blue" }}>
                      Set Url
                    </span>
                    <p style={{ marginBottom: "-10px" }}>
                      music.devevoquins.com{" "}
                      <i
                        class="bi bi-circle-fill "
                        style={{ color: "yellow" }}
                      ></i>
                    </p>
                    <span style={{ fontSize: "15px", color: "blue" }}>
                      Set Url
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default WebDomains5;
