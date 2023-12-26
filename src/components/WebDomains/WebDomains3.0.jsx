import React from "react";
import { Chart as ChartJs, ArcElement, LinearScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./webdomains.css";
import WebChart from "../../charts/barcharts/WebChart";
import WebChart4 from "../../charts/barcharts/WebChart-4";
ChartJs.register(ArcElement, LinearScale);
const WebDomains3 = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [150, 50, 150, 150],
        backgroundColor: [
         'skyblue',
         'yellow',
         'darkviolet',
         'lightpink'
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
          <h4>Web 3.0 Domains</h4>
          <span>
            <p>Show:</p>
            <select>
              <option>This month</option>
            </select>
          </span>
        </div>
        {/* card-header-right */}
        <div className="card-header-right">
        <h6  style ={{color:"black"}}>Manage Web 3.0 Domains</h6>
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
            <p style={{ fontWeight: "600" }}>WEB 3.0 SUMMARY</p>
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
                <p style={{ marginRight: "110px", fontSize: "2.5rem" }}>31</p>
              </div>

              <WebChart />
            </div>
            <div className="card barcard">
              <div className="card-text">
                <p>PROVIDED REDIRECTIONS</p>
                <p style={{ marginRight: "110px", fontSize: "2.5rem" }}>35</p>
              </div>

              <WebChart />
            </div>
          </div>
          <div className="bar-charts">
            <div className="card barcard">
              <div className="card-text">
                <p>TOTAL ENCROACHMENTS</p>
                <p style={{ marginRight: "110px", fontSize: "2.5rem" }}>20</p>
              </div>
            <WebChart/>
         
            </div>
            <div className="card barcard">
              <div className="card-text">
                <p style={{ marginRight: "50px" }}> RESOLVED THREATS</p>
                <p style={{ marginRight: "110px", fontSize: "2.5rem" }}>24</p>
              </div>

              <WebChart4 />
            </div>
          </div>
        </div>
      </div>
 
    </div>
     
   </>
  );
};

export default WebDomains3;
