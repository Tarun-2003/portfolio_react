import React from 'react';
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <footer>
      <a href='#home' className='footer__logo'>Tarun Indira Kumar</a>
      <ul className='permalinks'>
      <li><a href='#home' >Home </a></li>
      <li><a href='#about' >About</a></li>
      <li><a href='#experience' >Experience </a></li>
      <li><a href='#portfolio' >Portfolio </a></li>
      <li><a href='#contact' >Contact  </a></li>
      <li><a href='#footer' >Footer </a></li>
   </ul>
<div className='footer__socials'>
      <a href= "https://www.linkedin.com/in/tarun-indira-kumar/" without rel="noreferrer" target="_blank"><BsLinkedin /> </a>
      <a href="https://www.instagram.com/_.tarun._18/" without rel="noreferrer" target="_blank"><FaInstagram /></a>
      <a href="https://github.com/Tarun-2003"  without rel="noreferrer" target="_blank"><FaGithub /></a>
</div>



<div className='footer__copyright'>
  <small>&copy; Tarun. All rights reserved</small>
</div>



      </footer>
    </section>
  )
}

export default Footer
