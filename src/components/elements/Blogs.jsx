import React from 'react'
import "../../assets/scss/Home.scss";
import { TbBook } from "react-icons/tb";
import blog from "../../assets/img/a7ebc8e0-70b8-4430-bc1d-ef984f614712.avif";
import profile from "../../assets/img/mypictures.jpeg";

function Blogs() {
  return (
    <div>
      <div className="example-blog">
          <img src={blog} />
          <h1>
            Mastering Flask: A Comprehensive Web Development Series for Python
            Enthusiasts - Form Validations
          </h1>
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
    </div>
  )
}

export default Blogs
