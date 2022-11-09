import React from "react";
import "../css/footer.css"
import {AiOutlineInstagram} from "react-icons/ai"


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">Mowahid Latif</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.instagram.com/mowahid_latif/"><AiOutlineInstagram/></a>
      </div>

      <div className="footer_copyight">
        <small>&copy; Mowahid Latif</small>
      </div>
    </footer>
  )
}

export default Footer;