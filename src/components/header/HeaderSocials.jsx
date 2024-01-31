import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href= "https://www.linkedin.com/in/tarun-indira-kumar/" without rel="noreferrer" target="_blank"><BsLinkedin /> </a>
      <a href="https://www.instagram.com/_.tarun._18/" without rel="noreferrer" target="_blank"><FaInstagram /></a>
      <a href="https://github.com/Tarun-2003"  without rel="noreferrer" target="_blank"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials;
