import React from 'react'
import './projectCard.css'
import { motion } from "framer-motion"


const ProjectCard = ({name, category, img, alt}) => {

  return (
    <div className='pfolio__projcard'>
      <motion.div whileHover={{scale:1.02}} className="pfolio__projcard-image">
        <img src={img} alt={alt} />
      </motion.div>
      <div className="pfolio__projcard-desc">
        <h4>{name}</h4>
        <p>{category}</p>
      </div>
    </div>
  )
}

export default ProjectCard