import React from "react";
import Image from "../../assets/image/Image";
import { FaChevronUp } from "react-icons/fa";
import "../../assets/scss/Filter.scss";

const Filter = () => {
  return (
    <div>
      <p>FILTERS</p>
      
      <div className="box">
        <div className=" d-flex justify-content-between my-4">
          <h6>Company Sectors</h6>
          <FaChevronUp className="icon" />
        </div>
        <input type="" placeholder="Search sector" />
        <div className="filter-box">
          <div className="chek">
            <input type="checkbox" />
            Administrative
          </div>
          <div className="chek">
            <input type="checkbox" checked />
            Arts & Design
          </div>
          <div className="chek">
            <input type="checkbox" />
            Business
          </div>
          <div className="chek">
            <input type="checkbox" />
            Consulting
          </div>
          <div className="chek">
            <input type="checkbox" />
            Customer Services & Support
          </div>
        </div>
        <img src={Image.line} />
      </div>
      <div className="box">
        <div className=" d-flex justify-content-between my-4">
          <h6>Country</h6>
          <FaChevronUp className="icon" />
        </div>
        <input type="" placeholder="Search sector" />
        <div className="filter-box">
          <div className="chek">
            <input type="checkbox" />
            Worldwide
          </div>
          <div className="chek">
            <input type="checkbox" checked />
            United States
          </div>
          <div className="chek">
            <input type="checkbox" />
            Azerbaijan
          </div>
          <div className="chek">
            <input type="checkbox" />
            Russia
          </div>
          <div className="chek">
            <input type="checkbox" />
            Turkey
          </div>
        </div>
        <img src={Image.line} />
      </div>
      <div className="box">
        <div className=" d-flex justify-content-between my-4">
          <h6>MetaTags</h6>
          <FaChevronUp className="icon" />
        </div>
        <input type="" placeholder="Search sector" />
        <div className="filter-box">
          <div className="chek">
            <input type="checkbox" />
            MetaTag 1
          </div>
          <div className="chek">
            <input type="checkbox" checked />
            MetaTag 2
          </div>
          <div className="chek">
            <input type="checkbox" />
            MetaTag 3
          </div>
          <div className="chek">
            <input type="checkbox" />
            MetaTag 4
          </div>
          <div className="chek">
            <input type="checkbox" />
            MetaTag 5
          </div>
        </div>
        <img src={Image.line} />
      </div>
      <div className="box">
        <div className=" d-flex justify-content-between my-4">
          <h6>Alexa Point</h6>
          <FaChevronUp className="icon" />
        </div>
        <input type="" placeholder="Search sector" />
        <div className="filter-box">
          <div className="chek">
            <input type="checkbox" />5 star
          </div>
          <div className="chek">
            <input type="checkbox" checked />4 star
          </div>
          <div className="chek">
            <input type="checkbox" />3 star
          </div>
          <div className="chek">
            <input type="checkbox" />2 star
          </div>
          <div className="chek">
            <input type="checkbox" />1 star
          </div>
        </div>
        <img src={Image.line} />
      </div>
      <div className="box">
        <div className=" d-flex justify-content-between my-4">
          <h6>Colors</h6>
          <FaChevronUp className="icon" />
        </div>
        <input type="" placeholder="Search sector" />
        <div className="filter-box">
          <div className="chek">
            <input type="checkbox" />
            Green
          </div>
          <div className="chek">
            <input type="checkbox" checked />
            Red
          </div>
          <div className="chek">
            <input type="checkbox" />
            Yellow
          </div>
          <div className="chek">
            <input type="checkbox" />
            Blue
          </div>
          <div className="chek">
            <input type="checkbox" />
            White
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
