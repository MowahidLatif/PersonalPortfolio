import React from "react";
import "../css/about.css";
// import me from "../assets"
import {MdOutlineEngineering} from "react-icons/md"
import {AiOutlineUser} from "react-icons/ai"
import {IoLibraryOutline} from "react-icons/io5"
import  IMG7819 from "../assets/IMG_7810.png"

const About = () => {
  return (
    <section id="about">
      <h5>A to know a little</h5>
      <h2>about me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={IMG7819} alt="something goes here!"/>
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
              <small>100+ World Wide</small>
            </article>
            <article className="about_card">
              <IoLibraryOutline className="about_icon"/>
              <h5>Projects</h5>
              <small>50+ Projects Developed</small>
            </article>
          </div>
          <p>I'm a 25 year old Software Engineer based out of Winnipeg, MB! I started my engineering journey 3 years ago after getting my Bachelor Degree in Psychology and Sociology from the University of Manitoba. I started learning Software Engineering because of my natural curiousity towards the world and how things are being more and more digitized.</p>
          <a href="#contact" className="btn btn-primary">Lets Talk!</a>
        </div>
      </div>
    </section>
  );
}

export default About;

// ADD AN IMAGE ABOUT ME and fix css