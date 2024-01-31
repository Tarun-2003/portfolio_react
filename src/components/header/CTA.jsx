import React from 'react'
import cv_tarun_protected from "../../assets/cv_tarun_protected.pdf";

const CTA = () => {
  return (
    <div className='cta'>
      <a href={cv_tarun_protected} download className='btn'> Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
