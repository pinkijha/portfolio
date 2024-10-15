import React, { useState } from 'react';
import { Link } from 'react-scroll'
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {

const [humbergerOpen, setHumbergerOpen] = useState(false);

const toggleHumberger = () => {
  setHumbergerOpen(!humbergerOpen)
}
 

  return (
    <div>
      <nav className='navbar'>
        <Link className='port'>Port<span className='folio'>Folio</span></Link>
        
          <div className={`desktopMenu ${humbergerOpen ? 'open' : ''}`} >
            
            <Link activeClass='active' to="header" spy={true} smooth={true} offset={-100} duration={500} className=' desktopMenuListItem' >Home </Link>
            <Link className=' desktopMenuListItem' activeClass='active'  to="about" spy={true} smooth={true} offset={-40} duration={500} >About </Link>
            <Link className=' desktopMenuListItem' activeClass='active'  to="skills" spy={true} smooth={true} offset={-100} duration={500} >Skills </Link>
            <Link className=' desktopMenuListItem' activeClass='active'  to="projects" spy={true} smooth={true} offset={-50} duration={500} >Projects </Link>

        </div>
        <button className='desktopMenuBtn' onClick={() =>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
        }}>
             Contact Me
        </button>
        
                  
        <div className='humberger' onClick={toggleHumberger}><MdOutlineMenu /></div>
         
        
      </nav>
    </div>
  )
}

export default Navbar
