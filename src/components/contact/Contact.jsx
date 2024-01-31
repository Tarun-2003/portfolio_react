import React from 'react'
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import  { useRef } from 'react';
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e86aqlb', 'template_hbt2xlk', form.current, 'B058T9vBK6Z86Vm8S')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
  <section id="contact">
      <h5 className='touch'>Get in Touch</h5>
      <h2>Contact Me</h2>
    <div className='container contact__container'>
            <div className='container__options'>
               <article className='container__option'>
                 <MdOutlineEmail className='container__option-icon'/>
                 <h4>Email</h4>
                 <h5 className='mail'>tharunindira@gmail.com</h5>
                 <a  href="mailto:tharunindira@gmail.com" target='_blank' rel="noreferrer"><button className='btn btn-primary'> Send a message</button></a>
               </article>
               <article className='container__option'>
                 <FaWhatsapp className='container__option-icon'/>
                 <h4>Whatsapp</h4>
                 <h5>+917550146505</h5>
                 <a  href="https://wa.me/+917550146505" target='_blank' rel="noreferrer"><button className='btn btn-primary'> Send a message</button></a>
               </article>
             </div>
           <form ref={form} onSubmit={ sendEmail }>
            <input type="text" name="name" placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder='Your Email' required/>
            <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
           </form>

     </div>
  </section>
  )
}

export default Contact
