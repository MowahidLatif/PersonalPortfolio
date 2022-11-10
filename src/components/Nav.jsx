import React from "react";
import "../css/nav.css"
import {AiFillHome, AiFillTool, AiOutlineBook} from "react-icons/ai"
import {BsPerson} from "react-icons/bs"
import {FiBook} from "react-icons/fi"
import {RiContactsBook2Fill} from "react-icons/ri"
import { useState } from "react";



const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => {setActiveNav('#about')}} ><BsPerson/></a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={() => {setActiveNav('#experience')}}><FiBook/></a>
      <a href="#services" className={activeNav === '#services' ? 'active' : ''} onClick={() => {setActiveNav('#services')}}><AiFillTool/></a>
      <a href="#portfolio" className={activeNav === 'portfolio' ? 'active' : ''} onClick={() => {setActiveNav('#portfolio')}}><AiOutlineBook/></a>
      <a href="#contact" className={activeNav === 'contact' ? 'active' : ''} onClick={() => {setActiveNav('#contact')}}><RiContactsBook2Fill/></a>
    </nav>
  )
}

export default Nav;