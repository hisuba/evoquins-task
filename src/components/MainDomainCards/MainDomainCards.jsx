import React from "react";
import "./maindomaincards.css";
import RecommendeDomains from "../RecommendedDomains/RecommendeDomains";

const MainDomainCards = () => {
  return (
    <>
      <div className="maindomain-container">
        <div className="maindomaincards-container">
          <div className="card">
            <h5>
              <span>
                <i className="bi bi-globe globe"></i>
              </span>
              devevoquins.com
            </h5>
            <ul>
              <li>
                Status: <span>Active</span>{" "}
                <i className="bi bi-check-circle-fill"></i>
              </li>
              <li>
                Auto Renew:<span>On </span>
              </li>
              <li>
                Expires on : <span>25 April 2022</span>{" "}
                <i class="bi bi-arrow-right-circle"></i>
              </li>
            </ul>
          </div>

          <div className="card">
            <h5>
              <span>
                <i className="bi bi-globe glob"></i>
              </span>
              devevoquin.in
            </h5>
            <ul>
              <li>
                Status: <span>Active</span>{" "}
                <i className="bi bi-check-circle-fill"></i>
              </li>
              <li>
                Auto Renew:<span>On </span>
              </li>
              <li>
                Expires on : <span>25 April 2022</span>{" "}
                <i class="bi bi-arrow-right-circle"></i>
              </li>
            </ul>
          </div>
          <div id="card">
            <i class="bi bi-plus-circle"></i>
            <h6>Add New Domain</h6>
          </div>
        </div>
      </div>
      <div className="secondary-domains">
        <table className="table">
          <h5>Secondary Domains</h5>
          <tbody>
            <tr>
              <th>Domain Name</th>
              <th>Status</th>
              <th>Expiry</th>
              <th>Redirections</th>
              <th>More</th>
            </tr>
            <tr>
              <td className="tdata">shop.devevoquins.com</td>
              <td>
                {" "}
                <i className="bi bi-check-circle-fill"></i>Active{" "}
              </td>
              <td>25 Jun 2020</td>
              <td>20</td>
              <td className="more">Manage</td>
            </tr>
            <tr>
              <td className="tdata">shop.devevoquins.in</td>
              <td>
                {" "}
                <i className="bi bi-check-circle-fill"></i>Active{" "}
              </td>
              <td>25 Jun 2020</td>
              <td>2</td>
              <td className="more">Manage</td>
            </tr>
            <tr>
              <td className="tdata">store.devevoquins.com</td>
              <td>
                {" "}
                <i className="bi bi-check-circle-fill"></i>Active{" "}
              </td>
              <td>25 Jun 2020</td>
              <td>20</td>
              <td className="more">Manage</td>
            </tr>
          </tbody>
        </table>
      </div>

      <RecommendeDomains />
    </>
  );
};

export default MainDomainCards;
