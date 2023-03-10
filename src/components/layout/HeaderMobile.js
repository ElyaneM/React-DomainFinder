import { NavLink } from "react-router-dom";
import Image from "../../assets/image/Image";

const HeaderMobile = () => {
  return (
    <>
      <div className="container d-flex justify-content-between">
        <NavLink className={"nav-link me-2 "} to="/">
          <h4>DOMAINFINDER</h4>
        </NavLink>
        <NavLink className={"nav-link "} to="/about">
           <img src={Image.hamburger}/>
        </NavLink>
      </div>
    </>
  );
};

export default HeaderMobile;
