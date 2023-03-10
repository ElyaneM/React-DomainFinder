import React from "react";
import Image from "../../assets/image/Image";
import Dropdown from "react-bootstrap/Dropdown";
import "../../assets/scss/Footer.scss";

const Footer = () => {
  return (
    <div className="footerB">
      <div className="container footer">
        <div className="social">
          <img src={Image.social} />
          <p className="pFooter">Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Trust & Safety</p>
        </div>
        <div className="language">
          <p>Language :</p>
          <Dropdown>
            <Dropdown.Toggle
              className=" border border-secondary rounded drop"
              variant=""
            >
              En
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdownMenu">
              <Dropdown.Item href="">Az</Dropdown.Item>
              <Dropdown.Item href="">Rus</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Footer;
