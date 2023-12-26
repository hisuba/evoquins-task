import React from "react";
import { Chart as ChartJs, ArcElement, LinearScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./webdomains.css";
import WebDomains3 from "./WebDomains3.0";

import BarChart from "../../Bar";
import WebDomains4 from "./WebDomains4.0";
import WebDomains5 from "./WebDomains5.0";
ChartJs.register(ArcElement, LinearScale);
const WebDomains = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(200, 100, 90)",
        ],
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
          <h4>Web 2.0 Domains</h4>
          <span>
            <p>Show:</p>
            <select>
              <option>This month</option>
            </select>
          </span>
        </div>
        {/* card-header-right */}
        <div className="card-header-right" >
          <h6  style ={{color:"black"}}>Manage Web 2.0 Domains</h6>
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
              height: "80vh",
              alignItems: "center",
              marginTop: "30px",
              marginLeft: "-70px",
            }}
          >
            <p style={{ fontWeight: "600" }}>WEB 2.0 SUMMARY</p>
            <Doughnut style={{ width: "150px", height: "150px" }} data={data} />
            <div className="color">
              <p>
                {" "}
                <i
                  class="bi bi-circle-fill "
                  style={{ color: "yellow" }}
                ></i>{" "}
                LOOK ALIKES
              </p>
              <p>
                {" "}
                <i class="bi bi-circle-fill" style={{ color: "pink" }}></i>{" "}
                TOTAL ENCROACHMENTS
              </p>
              <p>
                {" "}
                <i
                  class="bi bi-circle-fill "
                  style={{ color: "skyblue" }}
                ></i>{" "}
                PROVIDED REDIRECTIONS
              </p>
              <p>
                {" "}
                <i class="bi bi-circle-fill" style={{ color: "blue" }}></i>{" "}
                RESOLVED THREATS
              </p>
            </div>
          </div>
        </div>
        <div className="main-charts d-flex">
          <div className="bar-charts">
            <div className="card barcard">
              <div className="card-text">
                <p style={{ marginRight: "105px" }}>Look Alikes</p>
                <p style={{ marginRight: "110px", fontSize: "2.5rem" }}>5</p>
              </div>

              <BarChart />
            </div>
            <div className="card barcard">
              <div className="card-text">
                <p>PROVIDED REDIRECTIONS</p>
                <p style={{ marginRight: "110px", fontSize: "2.5rem" }}>4</p>
              </div>

              <BarChart />
            </div>
          </div>
          <div className="bar-charts">
            <div className="card barcard">
              <div className="card-text">
                <p>TOTAL ENCROACHMENTS</p>
                <p style={{ marginRight: "110px", fontSize: "2.5rem" }}>6</p>
              </div>

              <BarChart />
            </div>
            <div className="card barcard">
              <div className="card-text">
                <p style={{ marginRight: "50px" }}> RESOLVED THREATS</p>
                <p style={{ marginRight: "110px", fontSize: "2.5rem" }}>10</p>
              </div>
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
    <WebDomains3/>
    <WebDomains4/>
    <WebDomains5/>
    </>
  );
};

export default WebDomains;
