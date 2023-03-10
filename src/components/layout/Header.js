import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderMobile from "./HeaderMobile";
import HeaderWeb from "./HeaderWeb";

const Header = () => {
  let { innerWidth } = window;

  let [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(innerWidth < 961);
  }, [innerWidth]);

  let location = useLocation();
  let { pathname } = location;
  return (
    <div className={`w-100 p-4 ${ pathname === "/" ? "bg-white" : "bg-success text-white"}`}>
      {!mobile ? <HeaderWeb /> : <HeaderMobile />}
    </div>
  );
};

export default Header;
