import React from 'react'
import "./header.css"
import CTA from './CTA';
import ME from "../../assets/me.png";
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
 <header>
  <div id = "home" class= "container header__container">
<h3>Hello I'm</h3>
<h1> Tarun Indira Kumar </h1>
<h4 className="text-light">Front-End Web Developer</h4>
<CTA/>
<HeaderSocials />
<div className='me'>
  <img src={ME} alt=""/>
</div>
<a href="#contact" className='scroll__down'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"></path></svg></a>
  </div>
 </header>
  )
}

export default Header
