import React from "react";
import logo from "../assets/calc.png";

function Header() {
  return (
    <div id="header">
      <h1>React Investment Calculator</h1>
      <img src={logo} alt="React Investment Calculator" />
    </div>
  );
}

export default Header;
