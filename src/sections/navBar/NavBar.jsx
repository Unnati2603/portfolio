import './navBar.css'
import React, { useState } from 'react';
import logo from '../../asessts/logo.jpeg';
import data from './whyDAta';
import {IoMdColorPalette} from 'react-icons/io'

const NavBar = () => {
 const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
  <nav className={`app ${darkMode ? "dark-mode" : "light-mode"}`} >
    <div className="container nav_container" id="navcontainer">
      <a href="index.html" className='nav_logo'>
      <img src={logo} alt="LOGO- Trust me I'm an Engineer" id="logo"/></a>

      <ul className='nav_menu'>
        
        {  data.map  ( item  => 
          <li key={item.id}>
            <a href={item.link}> 
            {item.title} 
            </a>
          </li>)
        }
      
      </ul>

{/* dont understand this,, alternatives to be searched for */}


      
  <button id="theme_icon" onClick={toggleDarkMode}>
        <IoMdColorPalette />
      </button>

    </div>




  </nav>
  )
}

export default NavBar