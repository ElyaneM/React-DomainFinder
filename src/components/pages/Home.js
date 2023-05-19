import React from "react";
import "../../assets/scss/Home.scss";
import blog from "../../assets/img/a7ebc8e0-70b8-4430-bc1d-ef984f614712.avif";
import profile from "../../assets/img/mypictures.jpeg";
import { TbBook } from "react-icons/tb";
import Blogs from "../elements/Blogs";

function Home() {
  return (
    <>
      <div className="home-up">
        <div className="container">
          <div className="main-blog">
            <img src={blog} />
            <h1>
              Mastering Flask: A Comprehensive Web Development Series for Python
              Enthusiasts - Form Validations
            </h1>
            <p>Article 6: Form Validations</p>
            <div className="director">
              <img src={profile} />
              <div className="title">
                <h3>Mushvig Shukurov</h3>
                <p>
                  <TbBook /> 11 min read
                </p>
              </div>
            </div>
          </div>
          <div className="blogs">
            <Blogs />
            <Blogs />
          </div>
        </div>
      </div>
      <div className="home-down ">
        <div className="container">
          <div className="d-flex">
            <Blogs />
            <Blogs />
            <Blogs />
          </div>
          <div className="d-flex">
            <Blogs />
            <Blogs />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
