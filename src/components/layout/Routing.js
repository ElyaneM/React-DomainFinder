import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Result from "../pages/Result";
import Details from "../pages/Details";
import NoPage from "../pages/NoPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/result" element={<Result />} />
      <Route path="/result/:id" element={<Details />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default Routing;
