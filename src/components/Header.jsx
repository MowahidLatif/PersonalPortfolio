import React from "react";
import "../css/header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials"
import IMG_7819png  from "../assets/IMG_7819.png"

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Mowahid Latif</h1>
        <h5 className="text-light">Full Stack Software Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <a href="#contact" className="scroll_down">Scroll Down</a>
        <div className="me">
          <img src={IMG_7819png} alt="INSERT IMAGE HERE"/>
        </div>
      </div>
    </header>
    )
}

export default Header;