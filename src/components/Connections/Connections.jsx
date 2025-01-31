import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "../Nav/Nav";
import Blue from "../Blue/Blue";
import Red from "../Red/Red";
import Green from "../Green/Green";
import Home from "../Home/Home";

function Connections() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<Blue />}></Route>
        <Route path="/red" element={<Red />}></Route>
        <Route path="/green" element={<Green />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default Connections;
