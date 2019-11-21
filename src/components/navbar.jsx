import React from "react";
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    // <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
      <nav id="navbar" className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink id="logo" className="nav-link animated bounce" to="/">
              <img src="./logo.png" style={{width: "80%", height:"80%"}}alt=""/>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item" id="area-of">
            <NavLink className="nav-link" to="/areaOfInterest">
              Areas of Interest
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/people">
              People
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/projects">
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/publication">
              Publications
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
