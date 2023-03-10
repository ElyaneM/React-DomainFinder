import { NavLink } from "react-router-dom";

const HeaderWeb = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center ">
        <div className="logo">
          <NavLink className={"nav-link"} to="/">
            <b>DOMAINFINDER</b>
          </NavLink>
        </div>
        <div className="menu d-flex">
          <NavLink className={"nav-link mx-4"} to="/about">
            About us
          </NavLink>
          <NavLink className={"nav-link"} to="/">
            For Developers
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeaderWeb;
