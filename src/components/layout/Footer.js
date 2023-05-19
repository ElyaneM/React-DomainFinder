import React from "react";
import "../../assets/scss/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <p>©2023 Mushvig Shukurov's Blog</p>
      <div>
        <a href="">Archive</a>
        <a href="">Privacy policy</a>
        <a href="">Terms</a>
      </div>

      <button>Publish with Hashnode</button>
      <p>Powered by Hashnode - Home for tech writers and readers</p>
    </div>
  );
}

export default Footer;
