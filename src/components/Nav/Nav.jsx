import React from "react";
import { Link } from "react-router-dom";
import Connections from "../Connections/Connections";

function Nav() {
  return (
    <div id="navbar">
      <Link to="/home">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/green">Green</Link>
    </div>
  );
}

export default Nav;
