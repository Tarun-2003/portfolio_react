import React from 'react'
import "./about.css";
import me2 from "../../assets/2020.jpg";
import { FaAward } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { LuFiles } from "react-icons/lu";
const About = () => {
  return (
    <section id="about">
      <h4>Get To Know</h4>

      <h2>About Me</h2>
      
      <div className='container about__container'>

        <div className='about__me'>
        
          <div className='about__me-image'>
            <img src={me2}  alt=""/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1.5+ Years Learning</small>  
            </article>
            <article className='about__card'>
              <LuFiles  className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
            <article className='about__card'>
            <IoSchoolSharp className="about__icon"/>
              <h5>Education</h5>
              <small>B.Tech ECE </small><br/>
              <small>SRM University</small>
            </article>
            
          </div>
          <p id="about__text">
            Embarking on a digital journey with a passion for coding and creativity. I thrive on turning ideas into interactive experiences, blending design and functionality to bring visions to life.
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
