import React from 'react'
import './header.css';
import { Navbar } from '../../components';
import { HiArrowSmallDown } from "react-icons/hi2";
import { motion, } from "framer-motion"


const Header = ({ isVisible }) => {
  return (
    <div id='home'>
      <Navbar />
      <div className="pfolio__hero-content section__padding">
        <div className="pfolio__hero-content_main">
          <div className="pfolio__hero-content_main-heading">
            <h1>
              Websites&
              <br />Branding
            </h1>
          </div>

              <motion.a href='#projects'
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}

                
              >
                SCROLL DOWN
                <HiArrowSmallDown />
              </motion.a>

        </div>
        <div className="pfolio__hero-content__secondary">
          <div className='pfolio__hero-content__secondary-col1'>
            <h4>Let's Talk</h4>
            <a href="mailto:hello@joey.co">hello@joey.co</a>
          </div>
          <div className='pfolio__hero-content__secondary-col2'>
            <p>Hello, I'm Joey, an online product designer focusing on brand identity, advertising, and no-code instruments.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header