import React from "react";
import "../css/about.css";
// import me from "../assets"
import {MdOutlineEngineering} from "react-icons/md"
import {AiOutlineUser} from "react-icons/ai"
import {IoLibraryOutline} from "react-icons/io5"

const About = () => {
  return (
    <section id="about">
      <h5>A to know a little</h5>
      <h2>about me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src="" alt="something goes here!"/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <MdOutlineEngineering className="about_icon"/>
              <h5>Experience</h5>
              <small>3+ years of Engineering Experince</small>
            </article>
            <article className="about_card">
              <AiOutlineUser className="about_icon"/>
              <h5>Clients</h5>
              <small>300+ World Wide</small>
            </article>
            <article className="about_card">
              <IoLibraryOutline className="about_icon"/>
              <h5>Projects</h5>
              <small>50+ Projects Developed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, culpa repudiandae quam ut molestias velit vero doloremque! Dolorum soluta id facere atque, molestiae modi quia, reprehenderit quis veniam possimus eligendi?</p>
          <a href="#contact" className="btn btn-primary">Lets Talk!</a>
        </div>
      </div>
    </section>
  );
}

export default About;

// ADD AN IMAGE ABOUT ME and fix css