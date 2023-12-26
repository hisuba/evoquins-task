import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./maindomain.css";
import MainDomainCards from "../../components/MainDomainCards/MainDomainCards";
const MainDomain = () => {
  return (
    <>
      <div className="main-container">
        <div className="main-buttons">
          <button className="btn-1">Web 2.0</button>
          <button className="btn-2">Web 3.0</button>
        </div>
        <div className="section">
          <div className="container-heading">
            <h5>Your Web 2.0 Domains</h5>
          </div>

          <div className="links">
            <div className="domain-links">
              <ul>
                <li>
                  <h6 className="h6">Active Domains</h6>
                </li>
                <li>
                  {" "}
                  <h6 id="h6">Expired Domains</h6>
                </li>
              </ul>
            </div>
            <div className="link-btn">
              <button className="btn">
                {" "}
                <i className="bi bi-globe" id="globe">
                  Link Outside Domains
                </i>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <MainDomainCards/>
    </>
  );
};

export default MainDomain;
