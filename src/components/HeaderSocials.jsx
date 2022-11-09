import React from "react";
import "../css/headersocials.css";
import {BsLinkedin, BsInstagram, BsGithub} from "react-icons/bs"

// MAY HAVE TO HAVE UNDERSCORE TO BLANK IF IT DOESNT WORK 

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="blank"><BsLinkedin/></a>
      <a href="https://github.com" target="blank"><BsGithub/></a>
      <a href="https://instagram.com" target="blank"><BsInstagram/></a>
    </div>
    )
}

export default HeaderSocials;