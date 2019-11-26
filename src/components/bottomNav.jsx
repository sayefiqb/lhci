import React, { Component } from "react";

const BottomNav = () => {
  return (
    <div id="bottom-nav" className="row">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <br />
            <p>
              <strong>Laboratory of Human Computer Interaction</strong>
            </p>
            <p>St. John's University</p>
            <p>Collins College of Professional Studies</p>
            <p>8000 Utopia Parkway, Jamaica</p>
            <p>New York, 11423</p>
          </div>
          <div className="col-sm-2"></div>
          <div className="col-sm-4">
            <br />
            <p>
              <strong>LHCI</strong> researches are funded by
            </p>
            <div className="row">
              <div className="col-sm-3">
                <a href="https://www.acm.org">
                  <img
                    className="bottom-nav-img"
                    src="./acm.png"
                    style={{ width: "50px", height: "50px" }}
                    alt=""
                  />
                </a>
              </div>
              <div className="col-sm-3">
                <a href="https://www.stjohns.edu">
                  <img
                    className="bottom-nav-img"
                    src="./sju.png"
                    style={{ width: "50px", height: "50px" }}
                    alt=""
                  />
                </a>
              </div>
              <div className="col-sm-3">
                <a href="https://www.ieee.org">
                  <img
                    className="bottom-nav-img"
                    src="./ieee.png"
                    style={{ width: "50px", height: "50px" }}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <br />
            <p>
              Copyright &copy; 2019 Laboratory of Human Computer Interaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
