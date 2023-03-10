import React from "react";
import Image from "../../assets/image/Image.js";
import "../../assets/scss/AboutUs.scss";

function AboutUs() {
  return (
    <div className="container aboutUs">
      <div className="left">
        <h1>Use Domain Finder to find unique domains!</h1>
        <p>
          Millions of people are searching for companies, domains, meta tags,
          company names and etc., on Domain finder. Try today! <b>1 000 000 </b>
          data for your search.
        </p>
        <img className="img-arrow" src={Image.frame} />
      </div>
      <div className="right">
        <img src={Image.img} />
      </div>
    </div>
  );
}

export default AboutUs;
