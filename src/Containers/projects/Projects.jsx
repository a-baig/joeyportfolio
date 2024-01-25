import React from 'react'
import './projects.css'
import { FaArrowRight } from "react-icons/fa6";
import { ProjectCard } from '../../components'
import crtly from '../../Assets/projects/crtly.png'
import crint from '../../Assets/projects/crint.png'
import senta from '../../Assets/projects/senta.png'
import tansto from '../../Assets/projects/tansto.png'


const Projects = () => {

  const data = [
    {
      pname:"Crtly",
      category: "Mobile App",
      image: crtly,
      imageAlt: "Image of Crtly Mobile App"
    },
    {
      pname:"Tansto", 
      category: "Web Design",
      image: tansto,
      imageAlt: "Image of Tansto Web Design"
    },
    {
      pname:"Senta",
      category: "Mobile App",
      image: senta,
      imageAlt: "Image of Crtly Mobile App"
    },
    {
      pname:"Crint",
      category: "Mobile App & Branding",
      image: crint,
      imageAlt: "Image of Senta Mobile App & Branding"
    }
  ];
  

  return (
    <div id='projects' 
    className='pfolio__projects-container section__padding section__padding-y'>
      <div className="pfolio__projects-container-desc">
        <div className="pfolio__projects-container-desc_col1">
          <h2>Projects</h2>
          <p>As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I aim to assist you in constructing the brand of your fantasies.</p>
        </div>
        <div className="pfolio__projects-container-desc_col2">
          <a href="">More <FaArrowRight /></a>
        </div>
      </div>

      <div className="pfolio__projects-container-main">
        {data.map((item,index) =>(
        <ProjectCard key={index} name={item.pname} category={item.category} img={item.image} alt={item.imageAlt}/>
        ))}
      </div>
    </div>
  )
}

export default Projects