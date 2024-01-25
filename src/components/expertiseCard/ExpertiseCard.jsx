import React from 'react'
import './expertiseCard.css'
const ExpertiseCard = ({name,desc}) => {
  return (
    <div className='pfolio__expertise-card'>
      <ul><li><h4>{name}</h4></li></ul>
      <p>{desc}</p>
    </div>
  )
}

export default ExpertiseCard