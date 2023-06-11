import React from "react";
import logo from "../assets/logo_transparent.png";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="nav-container">
        <img src={logo} width={80} height={80} alt="logo-ardee" />
        <div className="nav-buttons">
          <div
            className={`nav-btn ${props.index === 0 ? 'active-nav-btn' : 'inactive-nav-btn'}`}
            onClick={() => {
              props.setIndex(0);
            }}
          >
            Home
          </div>
          <div
            className={`nav-btn ${props.index === 1 ? 'active-nav-btn' : 'inactive-nav-btn'}`}
            onClick={() => {
              props.setIndex(1);
            }}
          >
            About
          </div>
          <div
            className={`nav-btn ${props.index === 2 ? 'active-nav-btn' : 'inactive-nav-btn'}`}
            onClick={() => {
              props.setIndex(2);
            }}
          >
            Skills
          </div>
          <div
            className={`nav-btn ${props.index === 3 ? 'active-nav-btn' : 'inactive-nav-btn'}`}
            onClick={() => {
              props.setIndex(3);
            }}
          >
            Services
          </div>
          <div
            className={`nav-btn ${props.index === 4 ? 'active-nav-btn' : 'inactive-nav-btn'}`}
            onClick={() => {
              props.setIndex(4);
            }}
          >
            Work
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
