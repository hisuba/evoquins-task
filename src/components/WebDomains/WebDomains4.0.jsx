import React from "react";
import { Chart as ChartJs, ArcElement, LinearScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./webdomains.css";
import WebChart from "../../charts/barcharts/WebChart";
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
import Linkedin from '../../assets/linkedin.png'
import Twitter from '../../assets/twitter.png'
ChartJs.register(ArcElement, LinearScale);
const WebDomains4 = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300,  50],
        backgroundColor: [
         'skyblue',
         'yellow',
         
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
            </div>  
          </div>
        </div>
        <div className="main-charts d-flex">
          <div className="bar-charts">
            <div className="card barcard" style = {{marginRight: "230px"}}>
              <div className="card-text">
                <p style={{ marginRight: "105px" }}>Look Alikes</p>
                <p style={{ marginRight: "110px", fontSize: "2.5rem" }}>3</p>
              </div>

              <WebChart />
            </div>
            <div className="main-social ">
                <div className="social-cards">
            <div className=" card social-card">
            <div className="social-texts d-flex">
                <div className="social-text "   style={{marginTop:'-25px'}}>
              <img  className =" social-icon"src={Facebook} alt="" />
                <p>Facebook</p>
                </div>
               <div className="social-btn">
               <button>connected</button>
               </div>
               </div>
            </div>
            <div className=" card social-card">
            <div className="social-texts d-flex">
                <div className="social-text"   style={{marginTop:'-25px'}}>
                <img  className =" social-icon"src={Linkedin} alt="" />
                <p>Linkedin</p>
                </div>
               <div className="social-btn">
               <button>connected</button>
               </div>
               </div>
            </div>
            </div>

            <div className=" social-cards">
            <div className=" card social-card ">
                <div className="social-texts d-flex">
                <div className="social-text " style={{marginTop:'-25px'}}>
                <img  className =" social-icon"src={Twitter} alt="" />
                <p>Twitter</p>
                </div>
               <div className="social-btn">
               <button>connected</button>
               </div>
               </div>
            </div>


            <div className=" card social-card">
            <div className="social-texts d-flex">
                <div className="social-text" style={{marginTop:'-25px'}}>
                <img  className =" social-icon"src={Instagram} alt="" />
                <p>Instagram</p>
                </div>
               <div className="social-btn">
               <button style={{backgroundColor:"#3559E0"}}>connect</button>
               </div>
               </div>
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

export default WebDomains4;
