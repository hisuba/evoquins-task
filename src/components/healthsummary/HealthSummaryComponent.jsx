import React from "react";
import "./healthsummary.css";
const HealthSummaryComponent = () => {
  return (
    <div className="h-container">
      <div className="card">
        <div className="card-header " id="main-header">
          {/* card-header-left */}
          <div className="card-header-left">
            <h4>Health Summary</h4>
            <span>
              <p>Show:</p>
              <select>
                <option>This month</option>
              </select>
            </span>
          </div>
          {/* card-header-right */}
          <div className="card-header-right">
            <h6>View Reports</h6>
            <span>
              {" "}
              <i class="bi bi-arrow-right-circle"></i>
            </span>
          </div>
        </div>

        <div className="card-header-child">
          {/* card-1 */}
          <div className="parent-1">
            <h6>SECURITY SCORE</h6>
            <div className="card-parent">
              <div className="card-1">
                900
                <br />
                Excellent
              </div>
            </div>
            <div className="span">
              <p>300</p>
              <p>900</p>
            </div>
          </div>

          {/* card -2 */}
          <div className="parent">
            <h6>WEB 2.0 DOMAINS</h6>
            <div className="card-parent-2">
              <div className="card-1">
                100% <br />
                Safe
              </div>
            </div>
          </div>

          {/* card -3 */}
          <div className="parent">
            <h6>WEB 3.0 DOMAINS</h6>
            <div className="card-parent-3">
              <div className="card-1">
                100% <br />
                Safe
              </div>
            </div>
          </div>
          {/* card-4 */}
          <div className="parent">
            <h6>SOCIAL ACCOUNTS</h6>
            <div className="card-parent-4">
              <div className="card-1">
                100% <br />
                Safe
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthSummaryComponent;
