import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineSensorDoor } from "react-icons/md";
import { useState } from 'react';
import "./nav.css";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home")
  return (
    <nav>
         <a href='#home' onClick={()=> setActiveNav("#home") } className={activeNav==="#home"?"active":""}><IoHomeOutline /></a>
         <a href='#about' onClick={()=> setActiveNav("#about") } className={activeNav==="#about"?"active":""} ><FaRegUser /></a> 
         <a href='#experience' onClick={()=> setActiveNav("#experience") } className={activeNav==="#experience"?"active":""}  ><IoBookOutline /></a>
         <a href='#portfolio' onClick={()=> setActiveNav("#portfolio") } className={activeNav==="#portfolio"?"active":""} ><IoBagOutline /></a>
         <a href='#contact' onClick={()=> setActiveNav("#contact") } className={activeNav==="#contact"?"active":""} > <MdOutlineMessage /></a>
         <a href='#footer' onClick={()=> setActiveNav("#footer") } className={activeNav==="#footer"?"active":""} > <MdOutlineSensorDoor /></a>

    </nav>
  )
}

export default Nav
