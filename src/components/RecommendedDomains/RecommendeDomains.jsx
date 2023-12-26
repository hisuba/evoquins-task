import React from "react";
import "./recommendeddomains.css";
const RecommendeDomains = () => {
  return (
    <>
      <div className="main-domain-container">
        <div className="domain-container-1">
          <div className="child-container-1">
            <h5>Recommended Domains For You</h5>
            <span>Recommended</span>
          </div>
          <div className="child-container-2">
            <div className="domain-headings">
              <div className="domain">
                <h6>Domain Name</h6>
                <p>newevoquins.xyz</p>
                <p>newevoquins.co.in</p>
                <p>newevoquins.com</p>
              </div>
            </div>
            <div className="domain-headings">
              <div className="single-domains">
                <h6>Single Domain</h6>
                <p>
                  {" "}
                  <span>Add to cart</span> at 5000
                </p>
                <p>
                  <span>Add to cart</span> at 5000
                </p>
                <p>
                  <span>Add to cart</span> at 5000
                </p>
              </div>
            </div>

            <div className="domain-headings">
              <div className="subscription">
                <div className="price">
                  <h6>Subscription</h6>
                  <p>
                    {" "}
                    <span>₹5000</span> ₹499{" "}
                    {/* <p>/Year with subscription <br/>(+ additional 5 domains)</p> */}{" "}
                  </p>
                  <p>
                    {" "}
                    <span>₹5000</span> ₹499{" "}
                    {/* <p>/Year with subscription <br/>(+ additional 5 domains)</p> */}{" "}
                  </p>
                  <p>
                    {" "}
                    <span>₹5000</span> ₹499{" "}
                    {/* <p>/Year with subscription <br/>(+ additional 5 domains)</p>  */}
                  </p>
                </div>

                <div className="tags">
                  <h6></h6>
                  <p>
                    /Year with subscription <br />
                    (+ additional 5 domains)
                  </p>
                  <p>
                    /Year with subscription <br />
                    (+ additional 5 domains)
                  </p>
                  <p>
                    /Year with subscription <br />
                    (+ additional 5 domains)
                  </p>
                </div>
              </div>
            </div>
            <div className="domain-headings"></div>

            <div className="domain-headings">
              <div className="sub-btns">
                <div>
                  <button>Subscribe</button>
                </div>
                <div>
                  <div>
                    <button>Subscribe</button>
                  </div>
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section-domain-container */}
      <div className="section-domain-container">
        <div className="domain-container-1 container-2">
          <div className="child-container-1">
            <h5>Expiring Soon</h5>
          </div>
          <div className="child-container-2">
            <div className="domain-headings">
              <div className="domain">
                <h6>Domain Name</h6>
                <p>newevoquins.xyz</p>
                <p>newevoquins.co.in</p>
                <p>newevoquins.com</p>
              </div>
            </div>
            <div className="domain-headings">
              <div className="single-domains">
                <h6>Expiry on</h6>
                <p> 25 August 2021</p>
                <p> 25 August 2021</p>
                <p> 25 August 2021</p>
              </div>
            </div>

            <div className="domain-headings">
              <div className="subscription">
                <div className="price">
                  <h6>Auto Renewal</h6>
                  <p>
                    {" "}
                    <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                    >
                      Off
                    </span>{" "}
                    {/* <p>/Year with subscription <br/>(+ additional 5 domains)</p> */}{" "}
                  </p>
                  <p>
                    {" "}
                    <span
                      style={{
                        color: "lightgreen",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                    >
                      On
                    </span>{" "}
                    {/* <p>/Year with subscription <br/>(+ additional 5 domains)</p> */}{" "}
                  </p>
                  <p>
                    {" "}
                    <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                    >
                      Off
                    </span>{" "}
                    {/* <p>/Year with subscription <br/>(+ additional 5 domains)</p>  */}
                  </p>
                </div>
              </div>
            </div>
            <div className="domain-headings"></div>

            <div className="domain-headings">
              <div className="sub-btns">
                <div>
                  <button>Renew</button>
                </div>
                <div>
                  <div>
                    <button className="renew-btn">
                      <span>Will Renew on</span>
                      <br /> 25 August 2021
                    </button>
                  </div>
                  <button>Renew</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendeDomains;
