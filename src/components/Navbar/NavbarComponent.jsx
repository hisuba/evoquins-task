import "./navbar.css";
import { GrTemplate } from "react-icons/gr";
import { RiCoupon2Line } from "react-icons/ri";
const NavbarComponent = () => {
  return (
    <nav class="navbar navbar-expand-lg  ">
      <div className="container-fluid">
        <ul className="nav-links ">
          <li>
            <a href="/">
              {" "}
              <span>
                <i className="bi bi-house-door"></i>
              </span>
              Dashboard
            </a>
          </li>
          <li>
            <a href="/maindomains">
              <span>
                <i className="bi bi-globe"></i>
              </span>
              Main Domains
            </a>
          </li>
          <li>
            <a href="/">
              <span>
                <i className="bi bi-bar-chart"></i>
              </span>
              Reports
            </a>
          </li>
          <li>
            <a href="/">
              <span>
                <i className="bi bi-people"></i>
              </span>
              Social Media Accounts
            </a>
          </li>
          <li>
            <a href="/">
              <span>
                <i className="bi bi-template">
                  {" "}
                  <GrTemplate />
                </i>
              </span>
              Templates
            </a>
          </li>

          <li>
            <a href="/">
              <span>
                <i className="bi bi-coupon">
                  <RiCoupon2Line />
                </i>
              </span>
              Coupons
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
