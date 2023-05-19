import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Badges from "../pages/Badges";
import Newsletter from "../pages/Newsletter";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/badges" element={<Badges />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </div>
  );
}

export default Routing;
