import React from "react";
import "../../assets/scss/Header.scss";
import { useNavigate } from "react-router-dom";
import mypictures from "../../assets/img/mypictures.jpeg";
import { AiFillGithub } from "react-icons/ai";
import { SiUdemy } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { FiArrowDown } from "react-icons/fi";
import { SlUserFollow } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const homePage = () => {
    navigate("/home");
  };

  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div className=" header">
      <div className="container">
        <div className="left-header">
          <div className="up-header">
            <div>
              <img src={mypictures} alt="" />
            </div>
            <div className="name-container">
              <h3>Mushvig Shukurov</h3>
              <p>#codewithmushvig</p>
            </div>
          </div>
          <div className="down-header">
            <AiFillGithub className="icon" />
            <FaLinkedinIn className="icon" />
            <SiUdemy className="icon" />
          </div>
        </div>
        <div className="right-header">
          <div className="up">
            <BsSearch className="icon" />
            <BsMoon className="icon" />
            <FiArrowDown className="icon" />
          </div>
          <div className="down">
            <div className="follow">
              <SlUserFollow className="icon" /> Abune ol
            </div>
            <AiOutlineMail className="icon" />
          </div>
        </div>
      </div>
      <div className="menu-container">
        <div>
          <div
            className={click ? "main-container" : ""}
            onClick={() => Close()}
          />
          <nav className="navbar" onClick={(e) => e.stopPropagation()}>
            <div className="nav-container">
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/"
                    activeClassName="active"
                    className="nav-links"
                    // onClick={click ? handleClick : null}
                   
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/badges"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Badges
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/newsletter"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Newsletter
                  </NavLink>
                </li>
              </ul>
              <div className="nav-icon" onClick={handleClick}>
                <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
