import React from 'react'
import './footer.css'
import {motion} from 'framer-motion'

const Footer = () => {
    return (
        <div id='contact' className='pfolio__footer-container section__padding section__padding-y'>
            <div className="pfolio__footer-container__row1">
                <h2>Let's talk!</h2>
                <span>
                    <a href="">
                        <motion.button 
                        whileHover={{scale:1.02}}
                        whileTap={{scale:0.9}}
                        type='button'>
                            hello@joey.co
                        </motion.button>
                    </a>
                </span>
            </div>
            <div className="pfolio__footer-container__row2">
                <div><p>2024 © - Made by Djectstudio</p></div>
                <div className='pfolio__footer-container__row2-links'>
                    <ul>
                        <li><a href="">Dribble</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">LinkedIn</a></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer