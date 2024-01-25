import React from 'react'
import { ExpertiseCard } from '../../components'
import './expertise.css'

const Expertise = () => {

    const data = [
        {
            name:"Branding",
            desc:"Collaborating closely, we'll develop an impactful brand identity for your emerging enterprise. The full spectrum of brand analysis and design is addressed. culminating in a visually stunning, evergreen logo concept."
        },
        {
            name:"UI Design",
            desc:"I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top- notch bespoke websites."
        },
        {
            name:"UX Design",
            desc:"I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements."
        },
        {
            name:"Development",
            desc:"I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach. I employ it to produce safe. top-notch personalized websites."
        },
    ];

  return (
    <div id='about' className='pfolio__expertise-container section__padding section__padding-y '>
        <h2>Expertise</h2>
        <div className='pfolio__expertise-container_main'>
            {data.map((item,index)=>(
                <ExpertiseCard name={item.name} desc={item.desc}/>
            ))}
        </div>
    </div>
  )
}

export default Expertise