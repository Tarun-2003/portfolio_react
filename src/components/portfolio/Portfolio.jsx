import React from 'react';
import "./portfolio.css";
import IMG1 from "../../assets/notes.png";
import IMG2 from "../../assets/todo.png";
import IMG3 from "../../assets/youtube.png";
import IMG4 from "../../assets/dice.png";
import IMG5 from "../../assets/Simon.png";
import IMG6 from "../../assets/drumkit.png";

const data = [{

  id:1,
  image:IMG1,
  title:"Notes App - React.js",
  github:"https://github.com/Tarun-2003/Notes_react_",
  demo:"https://tarun-2003.github.io/Notes_react_/"
  
  
  },
  {
  id:2,
  image:IMG3,
  title:"Youtube Clone - React.js",
  github:"https://github.com/Tarun-2003/youtube_tarun",
  demo:"https://tarun-2003.github.io/youtube_tarun/"
  
  
  },
  {
  id:3,
  image:IMG2,
  title:"To-Do List - React.js",
  github:"https://github.com/Tarun-2003/To-Do_react",
  demo:"https://tarun-2003.github.io/To-Do_react/"
  
  
  },
  {
  id:4,
  image:IMG5,
  title:"Simon Game - JavaScript",
  github:"https://github.com/Tarun-2003/Simon-Game",
  demo:"https://tarun-2003.github.io/Simon-Game/"
  
  
  },
  {
  id:5,
  image:IMG6,
  title:"DrumKit - JavaScript",
  github:"https://github.com/Tarun-2003/Drumkit",
  demo:"https://tarun-2003.github.io/Drumkit/"
  
  
  },
  {
  id:6,
  image:IMG4,
  title:"Dice Roller - Javascript",
  github:"https://github.com/Tarun-2003/dice",
  demo:"https://tarun-2003.github.io/dice/"
  
  
  }
  
  
  ]









const Portfolio = () => {
  return (
    

    <section id="portfolio">
      <h4 className='work'>My  Work</h4>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {data.map(({id,image,title, github,demo}) => {
          return (
            <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'> <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
           <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live demo </a></div>
        </article>

          )
        })
        }
      </div>
    </section>
  )
}

export default Portfolio
