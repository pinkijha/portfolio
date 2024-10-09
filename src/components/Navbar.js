import React, { useState } from 'react';
import { Link } from 'react-scroll';
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
            
            <Link className=' desktopMenuListItem' to="/home" >Home </Link>
            <Link className=' desktopMenuListItem' to="/home" >About </Link>
            <Link className=' desktopMenuListItem' to="/home" >Skills </Link>
            <Link className=' desktopMenuListItem' to="/home" >Projects </Link>

        </div>
        <button className='desktopMenuBtn'>
             Contact Me
        </button>
        
                  
        <div className='humberger' onClick={toggleHumberger}><MdOutlineMenu /></div>
         
        
      </nav>
    </div>
  )
}

export default Navbar
