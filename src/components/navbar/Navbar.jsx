import React, { useState } from 'react'
import './navbar.css';
import Logo from '../../Assets/Logo.svg'
import { MdMenu, MdOutlineClose } from "react-icons/md";
import MainMenu from '../menu/MainMenu';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div 
    className='pfolio__navbar'
    >
      <div className="pfolio__navbar-container section__padding">
        <div className="pfolio__navbar-container__logo">
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="pfolio__navbar-container__nav">
          <nav>
            <div className="pfolio__navbar-container__nav-links">
              <MainMenu />
            </div>
            <div className="pfolio__navbar-container__nav__mobilemenu-icon">
              {
                toggleMenu ? <MdOutlineClose color='#fff' size={27} onClick={() => setToggleMenu(false)} /> :
                  < MdMenu color='#fff' size={27} onClick={() => setToggleMenu(true)} />
              }
            </div>
          </nav>
        </div>
      </div>
      {
        toggleMenu == true ?
          <div className="pfolio__navbar-container__mobilemenu-links slide-left">
            <MainMenu />
          </div>
          :
          <div className="pfolio__navbar-container__mobilemenu-links slide-right">
            <MainMenu />
          </div>
      }
    </div>
  )
}

export default Navbar